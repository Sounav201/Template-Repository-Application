import { Button } from '@chakra-ui/react';
import React from 'react'

const EditorComponent = ({ variables ,handleSelection,applicationRef, handleRef}) => {

    let index = 0;


    return (
        <div className='w-11/12 mx-auto mb-6'>
                <div className='w-11/12 mx-auto my-4 flex items-center justify-end'><Button colorScheme={"red"}  onClick={handleRef}>Preview</Button></div>

            <div className='shadow-md rounded-md px-2 p-2 bg-white ' ref={applicationRef}>
                <div className='w-full '>
                <img src="/tvslogo_2.png" className="w-52 object-fit" alt="tvs logo" height={50} width={50} />
                </div>
                <div className='w-full  mx-auto p-1 flex items-center justify-end'>
                    <div className='flex flex-col items-center'>
                         <p className='text-lg text-center font-bold'>TVS Credit Services Limited</p>   
                         <p className='text-lg text-center font-bold'>Jayalakshmi Estates, Third Floor,</p>   
                         <p className='text-lg text-center font-bold break-all'>29, Haddows Road, Nungambakkam, Chennai</p>
                         <p className='text-lg text-center font-bold'>Tamil Nadu 600006</p>
                         <p className='text-lg text-center font-bold'>Web: www.tvscredit.com</p>
                         <p className='text-lg text-center font-bold'>Phone: 1800 425 3883</p>
                         <p className='text-lg text-center font-bold'>Email: helpdesk@tvscredit.com</p>
                         <div className='mx-auto text-left w-2/3'>
                         <p className='text-black text-lg font-bold'>Date: 
                         <span className='text-black text-left font-normal outline-none cursor-pointer hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition' onClick={() => handleSelection(variables[index].id)}>
                {variables[index].data  === "" ? <b>{`[${variables[index].name}]`}</b> : <b>{`${variables[index].data}`}</b>}</span>
                </p>
                </div>
                         
                         
                         
                    </div>
                </div>
                <div className='mt-4 mb-8'>
                    <h2 className='text-center text-black text-2xl font-semibold underline font-serif'>Sanction Letter</h2>
                </div>

                <div className='my-2 h-full p-2 text-lg    w-full'>
                    <p className='text-black text-left font-semibold hover:font-bold hover:shadow-md w-fit   hover:bg-slate-300 duration-300 transition cursor-pointer' onClick={() => handleSelection(variables[index+1].id)} >{variables[index + 1].data.length === 0 ? <b>{`[${variables[index + 1].name}]`}</b> : <b>{`${variables[index + 1].data}`}</b>}</p>
                    <p className='text-black text-left'>Dear Sir/Madam,</p>
                    <p className='text-black text-left'>Sub-Sanction Letter - <span className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer' onClick={() => handleSelection(variables[index+2].id)}>{variables[index + 2].data.length === 0 ? <b>{`[${variables[index + 2].name}]`}</b> : <b>{`${variables[index + 2].data}`}</b>}</span> Dealer Copy </p>
                    <br />
                        <p className='text-black text-left'>We have sanctioned a loan facility for the purchase of <span onClick={() => handleSelection(variables[index+3].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>{variables[index + 3].data.length === 0 ? <b>{`[${variables[index + 3].name}]`}</b> : <b>{`${variables[index + 3].data}`}</b>}</span> 
                         to our customer <span onClick={() => handleSelection(variables[index+4].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>{variables[index + 4].data.length === 0 ? <b>{`[${variables[index + 4].name}]`}</b> : <b>{`${variables[index + 4].data}`}</b>}</span>. 
                        Pursuant to the agreement executed by the customer in our favour with respect to the loan facility and on the basis of the instructions of the Customer we are disbursing the following amount in your favour.</p>
                    <br/>
                    <p className='text-black text-left'>Kindly arrange the delivery of the product to the customer at the below address only.</p>
                        <p className='text-black text-left'>Customer Name: <span onClick={() => handleSelection(variables[index+4].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                            <b>{variables[index + 4].data.length === 0 ? <b>{`[${variables[index + 4].name}]`}</b> : <b>{`${variables[index + 4].data}`}</b>}</b></span></p>
                        
                        <p className='text-black text-left'>Mobile Number: <span onClick={() => handleSelection(variables[index+5].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                            <b>{variables[index + 5].data.length === 0 ? <b>{`[${variables[index + 5].name}]`}</b> : <b>{`${variables[index + 5].data}`}</b>}</b></span></p>
                        
                        
                        <p className='text-black text-left'>Customer Address:<span onClick={() => handleSelection(variables[index+6].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                            <b>{variables[index + 6].data.length === 0 ? <b>{`[${variables[index + 6].name}]`}</b> : <b>{`${variables[index + 6].data}`}</b>}</b></span></p>
                        
                        <p className='text-black text-left'>Product Brand: <span onClick={() => handleSelection(variables[index+7].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'> <b>{variables[index + 7].data.length === 0 ? <b>{`[${variables[index + 7].name}]`}</b> : <b>{`${variables[index + 7].data}`}</b>}</b></span></p>
                        <p className='text-black text-left'>Product category and make: <span onClick={() => handleSelection(variables[index+8].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'><b>{variables[index + 8].data.length === 0 ? <b>{`[${variables[index + 8].name}]`}</b> : <b>{`${variables[index + 8].data}`}</b>}</b></span></p>
                        <p className='text-black text-left'>Product Model: <span onClick={() => handleSelection(variables[index+9].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'> <b>{variables[index + 9].data.length === 0 ? <b>{`[${variables[index + 9].name}]`}</b> : <b>{`${variables[index + 9].data}`}</b>}</b></span></p>
                        <p className='text-black text-left'>Scheme Code:<span onClick={() => handleSelection(variables[index+10].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                            <b>{variables[index + 10].data.length === 0 ? <b>{`[${variables[index + 10].name}]`}</b> : <b>{`${variables[index + 10].data}`}</b>}</b></span> 
                        
                        & EMI:<span onClick={() => handleSelection(variables[index+11].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'><b>{variables[index + 11].data.length === 0 ? <b>{`[${variables[index + 11].name}]`}</b> : <b>{`${variables[index + 11].data}`}</b>}</b></span> </p>
                    <br />
                    
                    <br />

                    <table className='text-black text-center'>
                            <thead>
                            <tr>
                                <th>Details</th>
                                <th>Amount in ₹</th>
                                <th>Deductions by TVS</th>
                                <th>Amount in ₹</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>A. Product Cost</td>
                                <td onClick={() => handleSelection(variables[index+12].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 12].data.length === 0 ? <b>{`[${variables[index + 12].name}]`}</b> : <b>{`${variables[index + 12].data}`}</b>}</td>
                                
                                <td>1. Processing fees</td>
                                <td onClick={() => handleSelection(variables[index+13].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    
                                    {variables[index + 13].data.length === 0 ? <b>{`[${variables[index + 13].name}]`}</b> : <b>{`${variables[index + 13].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td>B. Margin Money</td>
                                <td onClick={() => handleSelection(variables[index+14].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 14].data.length === 0 ? <b>{`[${variables[index + 14].name}]`}</b> : <b>{`${variables[index + 14].data}`}</b>}</td>
                                <td>2. Advance EMi</td>
                                <td onClick={() => handleSelection(variables[index+15].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 15].data.length === 0 ? <b>{`[${variables[index + 15].name}]`}</b> : <b>{`${variables[index + 15].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td>C. Finance Amount</td>
                                <td onClick={() => handleSelection(variables[index+16].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 16].data.length === 0 ? <b>{`[${variables[index + 16].name}]`}</b> : <b>{`${variables[index + 16].data}`}</b>}</td>
                                <td>3. Dealer Subvention</td>
                                <td onClick={() => handleSelection(variables[index+17].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 17].data.length === 0 ? <b>{`[${variables[index + 17].name}]`}</b> : <b>{`${variables[index + 17].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td>D. Deductions by TVS</td>
                                <td onClick={() => handleSelection(variables[index+18].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 18].data.length === 0 ? <b>{`[${variables[index + 18].name}]`}</b> : <b>{`${variables[index + 18].data}`}</b>}</td>
                                <td>4. Other charges if any</td>
                                <td onClick={() => handleSelection(variables[index+19].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'
                                >{variables[index + 19].data.length === 0 ? <b>{`[${variables[index + 19].name}]`}</b> : <b>{`${variables[index + 19].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td><b>E. Total Amount to be collected from the customer</b></td>
                                <td onClick={() => handleSelection(variables[index+20].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 20].data.length === 0 ? <b>{`[${variables[index + 20].name}]`}</b> : <b>{`${variables[index + 20].data}`}</b>}</td>
                                <td>5. Extended Warranty</td>
                                <td onClick={() => handleSelection(variables[index+21].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'
                                >{variables[index + 21].data.length === 0 ? <b>{`[${variables[index + 21].name}]`}</b> : <b>{`${variables[index + 21].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td>F. Net Loan Amount</td>
                                <td onClick={() => handleSelection(variables[index+22].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 22].data.length === 0 ? <b>{`[${variables[index + 22].name}]`}</b> : <b>{`${variables[index + 22].data}`}</b>}</td>
                                <td>6. Insurance</td>
                                <td onClick={() => handleSelection(variables[index+23].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'
                                >{variables[index + 23].data.length === 0 ? <b>{`[${variables[index + 23].name}]`}</b> : <b>{`${variables[index + 23].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td>G. Final Disbursement Amount</td>
                                <td onClick={() => handleSelection(variables[index+24].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 24].data.length === 0 ? <b>{`[${variables[index + 24].name}]`}</b> : <b>{`${variables[index + 24].data}`}</b>}</td>
                                <td>7. Asset Insurance</td>
                                <td onClick={() => handleSelection(variables[index+25].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 25].data.length === 0 ? <b>{`[${variables[index + 25].name}]`}</b> : <b>{`${variables[index + 25].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>8. Insta card enrollment fee</td>
                                <td onClick={() => handleSelection(variables[index+26].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'>
                                    {variables[index + 26].data.length === 0 ? <b>{`[${variables[index + 26].name}]`}</b> : <b>{`${variables[index + 26].data}`}</b>}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Sum of deductions</td>
                                <td onClick={() => handleSelection(variables[index+27].id)} className='hover:font-bold hover:shadow-md p-1  hover:bg-slate-300 duration-300 transition cursor-pointer'
                                >{variables[index + 27].data.length === 0 ? <b>{`[${variables[index + 27].name}]`}</b> : <b>{`${variables[index + 27].data}`}</b>}</td>
                            </tr>
                            </tbody>
                            </table>
                        
                        
                        <br />
                        <br />
                        <p className='text-black text-left font-bold underline'>Terms</p>
                        <p className='text-black text-left'>- Any amount more than the Final Disbursement Amount is to be collected from the customer before release of the Product.</p>
                        <p className='text-black text-left'>- The Final Disbursement Amount would be paid to you on the explicit understanding that any sun payable/refundable by you to the customer, would be paid/refunded by you, only to us, i.e. TVS Credit Services Limited</p>
                        <p className='text-black text-left'>- Original Financier copy of the Invoice with HYP marked to TVS Credit Services Limited, copy of duly receipted Delivery. Challan/Invoice/Delivery Receipt/Margin Money Receipt, ACH with signature as per Signature Proof and all relevant Pre-Disbursement documents clear copy should be sent to TVS Credit Services, for processing the final disbursement Amount. Further, Saathi app should be installed as applicable.</p>
                        <p className='text-black text-left'>- Funded Product should be delivered at the above Customer Address only. Change in the place of delivery will not to be entertained at any point of time.</p>
                        <p className='text-black text-left'>- This Sanction Letter is valid for 10 days from the date of issue and automatically expires unless renewed.It can also be revoked by us during it currency before the delivery with intimation to you number of days is changed.</p>
                        <p className='text-black text-left'>- Assets where serial number validation is mandatory , Liability of TVS Credit Services Limited arise only after successful validation of Serial number.</p>
                        <br />
                        <p className='text-black text-left font-bold underline'>Payment Terms</p>
                        <p className='text-black text-left'>- We shall release the payment as per the agreed terms mutually.</p>
                        <p className='text-black text-left'><b>Note: </b>This is computer generated Sanction Letter Signature not required.</p>
                        <p className='text-black text-left hover:font-bold hover:shadow-md w-fit  hover:bg-slate-300 duration-300 transition cursor-pointer' onClick={() => handleSelection(variables[index+28].id)}  >
                            {variables[index + 28].data.length === 0 ? <b>{`[${variables[index + 28].name}]`}</b> : <b>{`${variables[index + 28].data}`}</b>}</p>



                </div>


            </div>


        </div>
    )
}

export default EditorComponent