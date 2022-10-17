import React from 'react'

const EditorComponent = ({ variables }) => {

    let index = 0;

    return (
        <div className='w-11/12 mx-auto'>
            <div className='shadow-md rounded-md px-2 p-2 bg-gray-200 '>
                <div className=' mb-8'>
                    <h2 className='text-center text-black text-3xl font-semibold '>Sanction Letter</h2>
                </div>

                <div className='my-2 h-full p-2 text-lg    w-full'>
                    <p className='text-black text-left font-semibold'>{variables[index].data.length === 0 ? <b>{`[${variables[index].name}]`}</b> : <b>{`${variables[index].data}`}</b>}</p>
                    <p className='text-black text-left'>To</p>
                    <p className='text-black text-left font-semibold'>{variables[index + 1].data.length === 0 ? <b>{`[${variables[index + 1].name}]`}</b> : <b>{`${variables[index + 1].data}`}</b>}</p>
                    <p className='text-black text-left'>{variables[index + 2].data.length === 0 ? <b>{`[${variables[index + 2].name}]`}</b> : <b>{`${variables[index + 2].data}`}</b>}</p>
                    <p className='text-black text-left'>Respected Sir/Madam</p>
                    <p className='text-black text-left'>This letter is made in reference to your loan application number {variables[index + 3].data.length === 0 ? <b>{`[${variables[index + 3].name}]`}</b> : <b>{`${variables[index + 3].data}`}</b>} dated {variables[index + 4].data.length === 0 ? <b>{`[${variables[index + 4].name}]`}</b> : <b>{`${variables[index + 4].data}`}</b>}. Based on the information you provided in your loan application, we are pleased to inform you of the approval of your loan based on the following terms and conditions</p>
                    <br />
                    <p className='text-black text-left'>Loan amount of <b>₹{variables[index + 5].data.length === 0 ? <b>{`[${variables[index + 5].name}]`}</b> : <b>{`${variables[index + 5].data}`}</b>}</b></p>
                    <p className='text-black text-left'>Loan interest of <b>{variables[index + 6].data.length === 0 ? <b>{`[${variables[index + 6].name}]`}</b> : <b>{`${variables[index + 6].data}`}</b>}%</b> applicable in relation to market conditions upon the disbursement of the loan</p>
                    <p className='text-black text-left'>Payment mode :<b>{variables[index + 7].data.length === 0 ? <b>{`[${variables[index + 7].name}]`}</b> : <b>{`${variables[index + 7].data}`}</b>}</b></p>
                    <p className='text-black text-left'>Collateral provided :  <b>₹{variables[index + 8].data.length === 0 ? <b>{`[${variables[index + 8].name}]`}</b> : <b>{`${variables[index + 8].data}`}</b>}</b></p>
                    <p className='text-black text-left'>This offer is valid for <b>{variables[index + 9].data.length === 0 ? <b>{`[${variables[index + 9].name}]`}</b> : <b>{`${variables[index + 9].data}`}</b>}</b> days from the date of this letter</p>
                    <br />
                    <p className='text-black text-left'>Disbursement shall be made upon completion of the required documents for the loan and after signing the loan agreement</p>
                    <br />
                    <p className='text-black text-left'>Regards,</p>
                    <p className='text-black text-left'>{variables[index + 10].data.length === 0 ? <b>{`[${variables[index + 10].name}]`}</b> : <b>{`${variables[index + 10].data}`}</b>}</p>

                    

                </div>


            </div>


        </div>
    )
}

export default EditorComponent