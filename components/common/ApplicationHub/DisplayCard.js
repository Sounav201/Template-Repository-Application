import { Button } from '@chakra-ui/react'
import React from 'react'
import dayjs from 'dayjs'

const DisplayCard = ({selectedApplication}) => {

    const displayTeams = [{ name: "Legal", reviewStatus: 'done' }, { name: "Marketing", reviewStatus: 'done' }, { name: "Compliance", reviewStatus: 'pending' }, { name: "Business Head", reviewStatus: 'onhold' }]
    const applicationStatus = {legal:'done',marketing:'done',compliance:'pending',businessHead:'onhold'}


    return (
        <div className='w-full bg-gray-100 h-full rounded-r-lg'>
            <div className='w-11/12 mx-auto p-2'>
                <div className='text-left my-4'>
                    <div className='text-xl flex flex-col gap-y-4'>
                        <div>
                        <label className=''>Application ID : </label>
                        <span className='text-black font-semibold '>{selectedApplication.applicationID}</span>
                        </div>
                        
                        <div>
                        <label className=''>Created At : </label>
                        <span className='text-black font-semibold '>{dayjs(selectedApplication.createdAt).format('DD MMM YYYY')}</span>
                        </div>

                    </div>


                </div>


                <div className='my-4 text-2xl'>
                    <label className=''>Status : </label>
                    {selectedApplication.statusSummary=="Done" && <span className='text-green-500 font-semibold cursor-pointer'>Application Approved</span>}
                    {selectedApplication.statusSummary=="Pending" && <span className='text-yellow-500 font-semibold cursor-pointer '>{`Pending approval from ${selectedApplication.departmentBlocked}`}</span>}
                    
                    {/* <span className='text-black font-bold '>Pending approval from Compliance</span> */}
                    <div className=' rounded-md shadow-md   '>
                        {/* {displayTeams.map((team, index) => (
                        <div key={index} className={index == 0 ? `status-item first` : index >0 && index<2 ? `status-item second  `: `status-item pending  ` }>
                        
                        
                            <div className={team.reviewStatus=="done" ? ` status-circle bg-green-500 `:team.reviewStatus=="pending" ? `status-circle bg-yellow-500 `: team.reviewStatus=="onhold" && `status-circle bg-red-500`}>

                            </div>
                            <div className='status-text font-bold text-base'>{team.name}</div>
                        
                        
                    </div>
                    

                        ))} */}
        <div class="max-w-xl mx-auto my-10 border-b-2 pb-4">
          <div class="flex pb-3 ">
            <div class="flex-1">
            </div>
            
            
                       
            
    {/* Legal*/}
            <div class="flex-1">
              <div class={selectedApplication.applicationStatus.legal =="done" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center` 
              : selectedApplication.applicationStatus.legal == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center` }>
                <span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i>1</span>
              </div>
            </div>


            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
                <div class={selectedApplication.applicationStatus.legal == "done" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` : 
            `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{width:"100%"}}></div>
              </div>
            </div>

    {/* Marketing */}
            <div class="flex-1">
              <div class={selectedApplication.applicationStatus.marketing =="done" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center` 
              : selectedApplication.applicationStatus.marketing == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center` }>
                <span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i>2</span>
              </div>
            </div>

            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
                <div class={selectedApplication.applicationStatus.marketing == "done" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` : 
            `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{width:"100%"}}></div>
              </div>
            </div>

    {/* Compliance */}
            <div class="flex-1">
              <div class={selectedApplication.applicationStatus.compliance =="done" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center` 
              : selectedApplication.applicationStatus.compliance == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center` }>
                <span class="text-gray-700 text-center w-full">3</span>
              </div>
            </div>


            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                <div class={selectedApplication.applicationStatus.compliance == "done" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` : 
            `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{width:"100%"}}></div>
              </div>
            </div>

    {/* Business Head */}
            <div class="flex-1">
              <div class={selectedApplication.applicationStatus.businessHead =="done" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center` 
              : selectedApplication.applicationStatus.businessHead == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` 
              : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center` }>
                <span class="text-black text-center w-full">4</span>
              </div>
            </div>


            <div class="flex-1">
            </div>
            
          </div>

          <div class="flex text-base font-semibold   content-center text-center">
            <div class="w-1/4">
              Legal
            </div>

            <div class="w-1/4">
              Marketing
            </div>

            <div class="w-1/4">
              Compliance
            </div>

            <div class="w-1/4">
              Business Head
            </div>
          </div>
        </div>

                    </div>

                </div>

                <div className='flex items-center justify-end p-2'>
                    <Button  colorScheme='red' variant='solid'>Preview</Button>
                </div>

            </div>
        </div>
    )
}

export default DisplayCard