import React from 'react'

const Editor = ({ variables }) => {

    let index = 0;

    return (
        <div className='w-11/12 mx-auto'>
            <div className='shadow-md rounded-md p-3 bg-gray-200 py-8'>
                <div className=' mb-16'>
                    <h2 className='text-center text-black text-3xl font-semibold '>Application Name</h2>
                </div>

                <div className='my-2 h-full p-2 text-lg    w-full'>
                    <p className='text-black text-left font-semibold'>{variables[index].data.length === 0 ? <b>{`[${variables[index].name}]`}</b> : <b>{`${variables[index].data}`}</b>}</p>
                    <p className='text-black text-left'>To</p>
                    <p className='text-black text-left font-semibold'>{variables[index+1].data.length === 0 ? <b>{`[${variables[index+1].name}]`}</b> : <b>{`${variables[index+1].data}`}</b>}</p>
                    <p className='text-black text-left'>{variables[index+2].data.length === 0 ? <b>{`[${variables[index+2].name}]`}</b> : <b>{`${variables[index+2].data}`}</b>}</p>
                    <p className='text-black text-left'>Respected Sir/Madam</p>
                    <p className='text-black text-left'>We want to inform you that, you have made a request to us about a car loan. We are glad to inform you that your requested loan from {variables[index+3].data.length === 0 ? <b>{`[${variables[index+3].name}]`}</b> : <b>{`${variables[index+3].data}`}</b>} has been approved by our loan department office.</p>
                    <p className='text-black text-left'>Sincerely,</p>
                    <p className='text-black text-left'>{variables[index+4].data.length === 0 ? <b>{`[${variables[index+4].name}]`}</b> : <b>{`${variables[index+4].data}`}</b>}</p>


                </div>


            </div>


        </div>
    )
}

export default Editor