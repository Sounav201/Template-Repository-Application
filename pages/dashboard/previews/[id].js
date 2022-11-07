import { Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import LeftSidebar from '../../../components/common/LeftSidebar'
import Router, { useRouter } from 'next/router'
import AppContext from '../../../AppContext';
import Swal from 'sweetalert2'
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import axios from 'axios';
import { useToast,useDisclosure } from '@chakra-ui/react'
import jsPDF from 'jspdf';
import { FaShareAlt, FaPrint } from 'react-icons/fa'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,FormControl,FormLabel,Input
} from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


const getPaths = async (APIendpoint) => {
  const res = await fetch(APIendpoint);
  const data = await res.json();
  //console.log('Data in getPaths :', data)

  return data.applications;


}

const getPageData = async (APIendpoint, appID) => {
  let response = await axios.post(APIendpoint, {
    appID: appID,
  });
  let data = await response.data;
  //console.log('Page DATA : ', data);
  return data;
}

const Preview = ({ data }) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emailRec, setemailRec] = useState("")
  
  
  // PDF CODE
  const componentRef = useRef(null); // this is the reference to the component that we want to print 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //HANDLE SHARE PDF MODAL CODE
  const handleSharePDFClick = () => {
    onOpen();
  }

  //SHARE PDF CODE
  const generatePDF = async () => {
    onClose();
    var doc = new jsPDF('p', 'pt', 'a4');
    var docblob = '';
    let srcWidth = document.getElementById('tomail').scrollWidth;
    doc.html(document.getElementById('tomail'), {
      x: 18,
      y: 18,
      html2canvas: {
        scale: (595.28 - 18 * 2) / srcWidth,
      },
      callback: async function () {

        docblob = doc.output('blob');
        console.log(docblob, typeof (docblob));
        function blobToBase64(blob) {
          return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        }
        let attachments = await blobToBase64(docblob)
//        console.log(attachments.substring(28))
        let response = await axios.post("/api/sendgridEmail", {
          docblob: attachments.substring(28),
          emailRec:emailRec
        });
        let data = await response.data;
        console.log('Data from Sendgrid', data);
        if(data.message === "ok"){
          Swal.fire(
            'Application Shared!',
            `This application has been sent via email to ${emailRec}.`,
            'success'
          )
        }
        //window.open(doc.output('bloburl'));
      }
    });


  };

  const application = data.application;

  const [applicationData, setapplicationData] = useState(Array.isArray(application) ? application.length > 0 && application[0] : application);
  console.log("Application : ", applicationData)
  const approvalType = applicationData.approvaltype;
  const [previewapplicationBody, setpreviewapplicationBody] = useState(null);
  const router = useRouter();
  const { user, userEmail } = useContext(AppContext);

  useEffect(() => {

    let previewContent2 = JSON.parse(JSON.stringify(applicationData.appbody));
    setpreviewapplicationBody(previewContent2);

  }, [applicationData])


  const approveHandler = async () => {
    const response = await fetch('/api/approveApplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appID: applicationData.appid, email: applicationData.email, approvalType: applicationData.approvaltype })
    })
    //console.log(response)
    const data = response.json();
    console.log('Approve data : ', data);
    if (data.message == "ok")
      return true;
    else
      return false;
  }



  const handleApprove = async () => {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve!'
    }).then((result) => {
      if (result.isConfirmed) {
        //Call API to approve
        //axios.post('/api/approveApplication', {})

        if (approveHandler()) {
          Swal.fire(
            'Approved!',
            'This application has been approved from your end.',
            'success'
          )
          router.push('/dashboard/home');
        }
        else {
          Swal.fire(
            'Error!',
            'There was an error while approving this application.',
            'error'
          )
        }
      }
    })



  }

  const handleReject = async () => {

    Swal.fire({
      title: 'Please enter some comments',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,

      preConfirm: async (comments) => {
        return fetch(`/api/rejectApplication`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ appID: applicationData.appid, rejectionComments: comments })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            console.log('Response from rejection api : ', response)
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        toast({
          title: "Application Rejected",
          position: "top-right",
          isClosable: true,
          duration: 4000,
        });

        router.push('/dashboard/home');
      }
    })
  }

  // if(router.isFallback)
  // {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
        
  //       <CircularProgress size={'120px'} isIndeterminate color="green.300" />

  //       </div>
  //   )
  // }



  return (
    <div className='bg-[#2E0C6D] h-full pb-12'>

      <LeftSidebar activeTab={"home"} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">

          <h2 className='my-2 mb-8 text-white text-4xl text-center'>Preview</h2>
          {user === "Executor" &&
            <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
              <Button colorScheme="red" onClick={() => router.back()} >Go Back</Button>
              {approvalType && approvalType > 4 &&
                <div className='flex items-center gap-12 justify-between'>
                  <Button colorScheme="whatsapp" rightIcon={<FaPrint />} onClick={handlePrint}>Print</Button>
                  <Button colorScheme="teal" rightIcon={<FaShareAlt />} onClick={handleSharePDFClick}>Share as PDF</Button>

                </div>
              }

            </div>}
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={"whitesmoke"}>
          <ModalHeader>Share PDF as Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
          <FormControl>
              <FormLabel>Email Recipient</FormLabel>
              <Input variant={'filled'} onChange={(e)=> setemailRec(e.target.value)}  placeholder='Enter the email to whom you want to share' />
            </FormControl>          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  colorScheme={"telegram"} onClick={generatePDF}>Send Email</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          {user.includes("Approver") && <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
            <Button colorScheme="messenger" onClick={() => router.back()} >Go Back</Button>
            <Button colorScheme="whatsapp" onClick={handleApprove} >Approve</Button>
            <Button colorScheme="red" onClick={handleReject} >Reject</Button>


          </div>}

          {previewapplicationBody && <div ref={componentRef} id='tomail' className='   w-5/6 mx-auto p-1 mb-12' dangerouslySetInnerHTML={{ __html: previewapplicationBody }}></div>}

        </div>
      </div>

    </div>
  )
}

export const getStaticPaths = async () => {
  var APIendpoint;
  if (process.env.NODE_ENV === 'development') {
    APIendpoint = 'http://localhost:3000/api/fetchApplication'
  }
  else if (process.env.NODE_ENV === 'production') {
    APIendpoint = 'https://templaterepo.vercel.app/api/fetchApplication';
  }
  //  const res = await fetch(APIendpoint);
  const data = await getPaths(APIendpoint)
  const paths = data.map((application) => {
    return {
      params: { id: application.appid.toString() }
    }
  })

  //console.log("Paths from getStaticPaths: ", paths);
  return {
    paths,
    fallback: 'blocking'
  }

}

export async function getStaticProps(context) {
  const appID = context.params.id;

  var APIendpoint;
  if (process.env.NODE_ENV === 'development') {
    APIendpoint = 'http://localhost:3000/api/fetchApplicationwithID'
  }
  else if (process.env.NODE_ENV === 'production') {
    APIendpoint = 'https://templaterepo.vercel.app/api/fetchApplicationwithID';
  }

  // let response = await axios.post(APIendpoint, {
  //   appID: appID,
  // });
  let data = await getPageData(APIendpoint, appID);
  //console.log('In get Static props : ', data);

  return {
    props: { data },
    revalidate:5,
  }
}
export default Preview