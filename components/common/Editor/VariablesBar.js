import React from 'react'
import VariableInput from './VariableInput'

const VariablesBar = ({variables,handleTextInput}) => {
  return (
    <div>
        <aside className="mr-[100%] shadow-lg fixed  right-0 z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-full overflow-y-scroll  bg-[#0d0938] transition duration-300 md:w-4/12 lg:mr-0 lg:w-[35%] xl:w-[20%] 2xl:w-[17%]">
        <h3 className='text-white mt-4 mb-2 font-semibold text-center text-2xl'>Variables</h3>    

            <div className='my-auto w-full mx-auto'>
                <ul className='flex flex-col items-center justify-center gap-2'>
                    {variables.map((variable,) => (
                    <li key={variable.id} className=' flex flex-col items-center justify-center gap-2'>
                        <VariableInput  variable={variable} handleTextInput={handleTextInput}/>
                    </li>
                    ))}

                </ul>
                
            </div>

        </aside>

    </div>
  )
}

export default VariablesBar