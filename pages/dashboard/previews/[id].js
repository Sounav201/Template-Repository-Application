import { Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import LeftSidebar from '../../../components/common/LeftSidebar'
import Router, { useRouter } from 'next/router'
import AppContext from '../../../AppContext';
import Swal from 'sweetalert2'
import { useReactToPrint } from 'react-to-print';
import { render } from 'react-dom';

const Preview = () => {
    // PDF CODE
    const componentRef = useRef(); // null 
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const [previewapplicationBody, setpreviewapplicationBody] = useState(null);
    const router = useRouter();
    const {user,userEmail} =useContext(AppContext);

    useEffect(() => {

        if(typeof(window)!= undefined)
        {
          if(localStorage.getItem("applicationBody"))
          {
            let previewContent = JSON.parse(localStorage.getItem("applicationBody"));
            console.log('Preview : ', previewContent , typeof(previewContent));
            setpreviewapplicationBody(JSON.parse(localStorage.getItem("applicationBody")));
            
          }
        }
      }, [])

    const Sendapplicationhandler =  async () => {
      //email, appbody, apptype, tempid, userRole
      //TO DO : Need to delete the local storage variables post successful submission -> applicationBody, applicationVariables, applicationLanguage
      const email = userEmail || "";
      const appbody = previewapplicationBody;
      const apptype = "Sanction Letter";
      const tempid = "1";
      const userRole = user || "";
      const res = await fetch('/api/createApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, appbody, apptype, tempid, userRole }),
      });
      const data = await res.json();
      //console.log(data);
      if(data.message =="ok")
      {
        Swal.fire(
          'Good job!',
          'Your application has been sent for review!',
          'success'
        );
      router.push('/dashboard/home');
      }

    }


  return (
    <div className='bg-[#2E0C6D] h-full pb-12'>
        
        <LeftSidebar activeTab={"create"} />
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">

        <h2 className='my-2 mb-8 text-white text-4xl text-center'>Preview</h2>
        {user === "Executor" && 
              <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
              <Button colorScheme="red" onClick={() => router.back()} >Go Back</Button>
              <Button colorScheme="whatsapp" onClick={handlePrint}>Print</Button>
              {/* <button className="p-1 bg-green-500" onClick={handlePrint}>Print this out!</button> */}
              
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



export default Preview