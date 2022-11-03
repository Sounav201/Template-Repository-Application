import { Button } from '@chakra-ui/react'
import React from 'react'
import Router, { useRouter } from 'next/router'


const ApprovalList = ({ applications }) => {
    const router = useRouter();

    const handlePreviewClick = (ID) => {
        if (typeof (window) != undefined) {
            const index = applications.findIndex((item) => ID === item.appid);
            if (index != -1) {
                const applicationBody = applications[index].appbody;
         //       localStorage.setItem("applicationBody", JSON.stringify(applicationBody));
                router.push(`previews/${applications[index].appid}`);
            }
        }
    }

    return (
        <div className='bg-[#665CF5] p-1 h-full rounded-l-lg'>
            <div className='w-5/6  mx-auto'>
                {applications.length > 0 ? applications.map((application, index) => (
                    <div key={index} className='grid grid-cols-6 gap-2 rounded-md bg-gray-200 my-3 p-2'>
                        <div className='col-span-4 transition duration-200 cursor-pointer   hover:scale-105'>
                            <p className='font-semibold text-black text-center text-xl'>{application.applicationtype} - {application.appid}</p>
                        </div>
                        <div className='mx-auto col-span-2'>
                            <Button colorScheme='red' size={"sm"} variant='solid' onClick={() => handlePreviewClick(application.appid)}>Preview</Button>
                        </div>

                    </div>
                )) : <p className='text-white text-center'>No Applications</p>}
            </div>
        </div>
    )
}

export default ApprovalList