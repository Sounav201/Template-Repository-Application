import Link from 'next/link'
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
//color:"#4077C9"},
//{id:2,name:"Loan Agreement",color:"#DE4343"}, {id:3,name:"Welcome Letter",color:"#3AB77B"},
//{id:4,name:"Legal Notice",color:"#E98C1F"} ,{id:5,name:"TDS Certificate" ,color:"#7176EA"}

const TemplateCard = ({template}) => {
  return (
    <>
    <Link href="/dashboard/editor" >
    <div className='flex flex-col gap-3  items-center p-1 cursor-pointer'>
        <div 
        className={template.id == 1 ? `p-16 w-full bg-[#4077C9] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`
                : template.id == 2 ? `p-16 w-full bg-[#DE4343] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`
        : template.id == 3 ? `p-16 w-full bg-[#3AB77B] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`
        : template.id == 4 ? `p-16 w-full bg-[#E98C1F] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`
        : template.id == 5 && `p-16 w-full bg-[#7176EA] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`
      }>
            <AiOutlinePlus color='white' size={24} />
        </div>

        <div className='text-white text-base  '>{template.name}</div>
    </div>
    </Link>
    </>
  )
}

export default TemplateCard