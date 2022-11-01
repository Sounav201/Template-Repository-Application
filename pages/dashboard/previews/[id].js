import { Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import LeftSidebar from '../../../components/common/LeftSidebar'
import Router, { useRouter } from 'next/router'
import AppContext from '../../../AppContext';
import Swal from 'sweetalert2'
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'


const Preview = ({ data }) => {
  const toast = useToast()
  // PDF CODE
  const componentRef = useRef(); // null 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
      body: JSON.stringify({ appID: applicationData.appid })
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
    // console.log("APP ID: ",applicationData.appid);
    // if(approveHandler())
    // {
    //     Swal.fire(
    //       'Approved!',
    //       'This application has been approved from your end.',
    //       'success'
    //     )
    // }
    // else{
    //   Swal.fire(
    //     'Error!',
    //     'There was an error while approving this application.',
    //     'error'
    //   )
    // }

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
    //     Swal.fire({
    //       title: 'Please enter some comments',
    // input: 'text',
    // inputAttributes: {
    //   autocapitalize: 'off'
    // },
    // showCancelButton: true,
    // confirmButtonText: 'Submit',
    // showLoaderOnConfirm: true,
    //     })

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
          position:"top-right",
          isClosable: true,
          duration:4000,
        });

        router.push('/dashboard/home');
      }
    })
  }



  return (
    <div className='bg-[#2E0C6D] h-full pb-12'>

      <LeftSidebar activeTab={"home"} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">

          <h2 className='my-2 mb-8 text-white text-4xl text-center'>Preview</h2>
          {user === "Executor" &&
            <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
              <Button colorScheme="red" onClick={() => router.back()} >Go Back</Button>
              {approvalType && approvalType > 4 && <Button colorScheme="whatsapp" onClick={handlePrint}>Print</Button>}

            </div>}
          {user.includes("Approver") && <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
            <Button colorScheme="messenger" onClick={() => router.back()} >Go Back</Button>
            <Button colorScheme="whatsapp" onClick={handleApprove} >Approve</Button>
            <Button colorScheme="red" onClick={handleReject} >Reject</Button>


          </div>}

          {previewapplicationBody && <div ref={componentRef} className='   w-5/6 mx-auto p-1 mb-12' dangerouslySetInnerHTML={{ __html: previewapplicationBody }}></div>}

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
  const res = await fetch(APIendpoint);
  const data = await res.json();
  const paths = data.applications.map((application) => {
    return {
      params: { id: application.appid.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }


}
export async function getStaticProps(context) {
  //  console.log("Context params : ", context.params.id)
  const appID = context.params.id;

  var APIendpoint;
  if (process.env.NODE_ENV === 'development') {
    APIendpoint = 'http://localhost:3000/api/fetchApplicationwithID'
  }
  else if (process.env.NODE_ENV === 'production') {
    APIendpoint = 'https://templaterepo.vercel.app/api/fetchApplicationwithID';
  }

  let response = await axios.post(APIendpoint, {
    appID: appID,
  });
  let data = await response.data;
  //console.log("Data : ",data)
  return {
    props: { data }
  }
}
export default Preview