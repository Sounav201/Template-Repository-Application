import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const TemplateCard = ({template}) => {
  return (
    <div className='flex flex-col gap-3  items-center p-1 cursor-pointer'>
        <div className={`p-16 w-full bg-[${template.color}] flex justify-center shadow-md items-center transition duration-300 hover:scale-105 hover:shadow-white rounded-md cursor-pointer`}>
            <AiOutlinePlus color='white' size={24} />
        </div>
        <div className='text-white text-base  '>{template.name}</div>
    </div>
  )
}

export default TemplateCard