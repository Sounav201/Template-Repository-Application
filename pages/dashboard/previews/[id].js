import { Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import LeftSidebar from '../../../components/common/LeftSidebar'
import Router, { useRouter } from 'next/router'
import AppContext from '../../../AppContext';
import Swal from 'sweetalert2'
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';
import axios from 'axios';

const Preview = ({data}) => {
    // PDF CODE
    const componentRef = useRef(); // null 
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const application = data.application[0];
    const approvalType = application.approvaltype;

    const [previewapplicationBody, setpreviewapplicationBody] = useState(null);
    const router = useRouter();
    const {user,userEmail} =useContext(AppContext);

    useEffect(() => {

        if(typeof(window)!= undefined)
        {
          if(localStorage.getItem("applicationBody"))
          {
            let previewContent = JSON.parse(localStorage.getItem("applicationBody"));
           // console.log('Preview : ', previewContent , typeof(previewContent));
            setpreviewapplicationBody(JSON.parse(localStorage.getItem("applicationBody")));
            
          }
        }
      }, [])


  return (
    <div className='bg-[#2E0C6D] h-full pb-12'>
        
        <LeftSidebar activeTab={"create"} />
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">

        <h2 className='my-2 mb-8 text-white text-4xl text-center'>Preview</h2>
        {user === "Executor" && 
              <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
              <Button colorScheme="red" onClick={() => router.back()} >Go Back</Button>
        {approvalType && approvalType>4 &&    <Button colorScheme="whatsapp" onClick={handlePrint}>Print</Button> }   
              
          </div>}
        {user.includes("Approver")  && <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
<Button colorScheme="messenger" onClick={() => router.back()} >Go Back</Button>
<Button colorScheme="whatsapp" >Approve</Button>
<Button colorScheme="red" >Reject</Button>


</div>}

    {previewapplicationBody && <div ref = { componentRef } className='   w-5/6 mx-auto p-1 mb-12' dangerouslySetInnerHTML={{ __html: previewapplicationBody }}></div>}

    </div>
    </div>
    
    </div>
  )
}


export async function getServerSideProps(context) {
 // const data ={route:context.req.headers.referer}
  const routeArray = context.req.headers.referer.split("/");
  const appID = routeArray[routeArray.length-1];
  var APIendpoint;
  if (process.env.NODE_ENV === 'development') {
      APIendpoint = 'http://localhost:3000/api/fetchApplicationwithID'
  }
  else if(process.env.NODE_ENV === 'production'){
      APIendpoint = 'https://templaterepo.vercel.app/api/fetchApplicationwithID';
  }

 // let res =  await axios.get(APIendpoint);
//  let data = await res.data;


  let response = await axios.post(APIendpoint, {
    appID: appID,
  });
  let data = await response.data;
  return{
    props:{data}
  }
}
export default Preview