import { Button } from '@chakra-ui/react'
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import TemplateCard from './TemplateCard'
const CreateComponent = () => {
    const templates = [{id:1,name:"Sanction Letter",color:"#4077C9"},{id:2,name:"Loan Agreement",color:"#DE4343"}, {id:3,name:"Welcome Letter",color:"#3AB77B"},{id:4,name:"Legal Notice",color:"#E98C1F"} ,{id:5,name:"TDS Certificate" ,color:"#7176EA"}]
  return (
    <div className='bg-transparent w-11/12 mx-auto'>
        <div>
        <div className='my-3'>
            <h2 className=' text-left text-3xl text-white font-semibold mb-4 '>Create Application</h2>
            
        </div>
        
        <h4 className='my-6 text-white text-lg font-semibold'>Build a template from scratch with the help of our comprehensive Template Builder</h4>
        
        <Button leftIcon={<AiOutlinePlus color='white' />} variant='solid' colorScheme={"whatsapp"}>Create</Button>
        </div>
        <div className='mt-24  mb-2'>
        <h3 className=' my-4 font-semibold text-white text-2xl'>Create applications quickly</h3>
        <p className='my-2  text-white text-lg'>Choose from our pre-defined templates below</p>
        
        <div className='my-8 p-1 grid md:grid-cols-5 gap-6'>
            {templates.map(template => (
                <TemplateCard template={template} key={template.id} />
            ))}

        </div>
        </div>
    </div>
  )
}

export default CreateComponent