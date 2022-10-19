import { Button } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import LeftSidebar from '../../components/common/LeftSidebar'
import Router, { useRouter } from 'next/router'

const Preview = () => {

    const [previewapplicationBody, setpreviewapplicationBody] = useState(null);
    const router = useRouter();

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


  return (
    <div className='bg-[#2E0C6D] h-full pb-12'>
        
        <LeftSidebar activeTab={"create"} />
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">

        <h2 className='my-2 mb-8 text-white text-4xl text-center'>Preview</h2>
        <div className='p-1 flex items-center justify-between my-4  w-5/6 mx-auto '>
            <Button colorScheme="red" onClick={() => router.back()} >Go Back</Button>
            <Button colorScheme="whatsapp" >Send for Approval</Button>
            
        </div>
    {previewapplicationBody && <div className='   w-5/6 mx-auto p-1 mb-12' dangerouslySetInnerHTML={{ __html: previewapplicationBody }}></div>}

    </div>
    </div>
    
    </div>
  )
}

export default Preview