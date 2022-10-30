import React from 'react'
import {FaTrash} from 'react-icons/fa'
const List = ({applications,handleSelection}) => {
//appid,apptype,createdon,approvaltype,email,rejectionstatus,rejectioncomments,
console.log("applcations in list : ", applications)
    return (
    <div className='bg-[#665CF5] p-1 h-full rounded-l-lg'>
        <div className='w-5/6  mx-auto'>
            {applications.map((application,index)=>(
            <div key={application.appid} className='bg-gray-100 my-8 cursor-pointer p-1 rounded-lg hover:bg-gray-300 hover:scale-105 transition duration-300' onClick={() => handleSelection(application.appid)}>
            <div className=' text-center'>
                <div className='text-lg text-center font-semibold'>{application.applicationtype}        -         <span className='text-sm  text-black'>{application.appid}</span>
</div>
                {/* <FaTrash size={24} className="text-black hover:scale-105 transition duration-300 hover:text-gray-700" /> */}

            </div>

        </div>


            ))}
        </div>

    </div>
  )
}

export default List