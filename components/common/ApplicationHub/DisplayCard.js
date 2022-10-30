import { Button } from '@chakra-ui/react'
import React from 'react'
import dayjs from 'dayjs'
import Router, { useRouter } from 'next/router'

const DisplayCard = ({ selectedApplication }) => {
  const router = useRouter();


  ////appid,apptype,createdon,approvaltype,email,rejectionstatus,rejectioncomments,
  const handlePreviewClick = () => {
    if (typeof (window) != undefined && (selectedApplication != null || selectedApplication!= undefined)) {
      //  console.log('Setter runs!');
      const applicationBody = selectedApplication.appbody;

      //localStorage.setItem("applicationBody", JSON.stringify(applicationBody));
      router.push(`previews/${selectedApplication.appid}`);
    }
  }
  if (selectedApplication != null || selectedApplication!= undefined) {
    return (
      <div className='w-full bg-gray-100 h-full rounded-r-lg'>
        <div className='w-11/12 mx-auto p-2'>
          <div className='text-left my-4'>
            <div className='text-xl flex flex-col gap-y-4'>
              <div>
                <label className=''>Application ID : </label>
                <span className='text-black font-semibold '>{selectedApplication?.appid}</span>
              </div>

              <div>
                <label className=''>Created At : </label>
                <span className='text-black font-semibold '>{dayjs(selectedApplication?.createdon).format('DD MMM YYYY')}</span>
              </div>

            </div>


          </div>


          <div className='my-4 text-2xl'>
            <label className=''>Status : </label>
            {selectedApplication.statusSummary == "Approved" && <span className='text-green-500 font-semibold cursor-pointer'>Application Approved</span>}
            {selectedApplication.statusSummary == "Pending" && <span className='text-yellow-500 font-semibold cursor-pointer '>{`Pending approval from ${selectedApplication.departmentBlocked}`}</span>}

            {/* <span className='text-black font-bold '>Pending approval from Compliance</span> */}
            <div className=' rounded-md shadow-md   '>
              {/* {displayTeams.map((team, index) => (
                        <div key={index} className={index == 0 ? `status-item first` : index >0 && index<2 ? `status-item second  `: `status-item pending  ` }>
                        
                        
                            <div className={team.reviewStatus=="done" ? ` status-circle bg-green-500 `:team.reviewStatus=="pending" ? `status-circle bg-yellow-500 `: team.reviewStatus=="onhold" && `status-circle bg-red-500`}>

                            </div>
                            <div className='status-text font-bold text-base'>{team.name}</div>
                        
                        
                    </div>
                    

                        ))} */}
              <div className="max-w-xl mx-auto my-10 border-b-2 pb-4">
                <div className="flex pb-3 ">
                  <div className="flex-1">
                  </div>




                  {/* Legal*/}
                  <div className="flex-1">
                    <div className={selectedApplication?.applicationStatus?.legal == "approved" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center`
                      : selectedApplication?.applicationStatus?.legal == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center`}>
                      <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i>1</span>
                    </div>
                  </div>


                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
                      <div className={selectedApplication?.applicationStatus?.legal == "approved" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` :
                        `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="flex-1">
                    <div className={selectedApplication?.applicationStatus?.marketing == "approved" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center`
                      : selectedApplication?.applicationStatus?.marketing == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center`}>
                      <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i>2</span>
                    </div>
                  </div>

                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
                      <div className={selectedApplication?.applicationStatus?.marketing == "approved" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` :
                        `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* Compliance */}
                  <div className="flex-1">
                    <div className={selectedApplication?.applicationStatus?.compliance == "approved" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center`
                      : selectedApplication?.applicationStatus?.compliance == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center` : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center`}>
                      <span className="text-gray-700 text-center w-full">3</span>
                    </div>
                  </div>


                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                      <div className={selectedApplication?.applicationStatus?.compliance == "approved" ? `bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded` :
                        `text-xs leading-none py-1 text-center text-grey-darkest rounded`} style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  {/* Business Head */}
                  <div className="flex-1">
                    <div className={selectedApplication?.applicationStatus?.businessHead == "approved" ? `w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center`
                      : selectedApplication?.applicationStatus?.businessHead == "pending" ? `w-10 h-10 bg-yellow-500 status-circle mx-auto rounded-full text-lg text-white flex items-center`
                        : `w-10 h-10 bg-red-500 status-circle mx-auto rounded-full text-lg text-black flex items-center`}>
                      <span className="text-black text-center w-full">4</span>
                    </div>
                  </div>


                  <div className="flex-1">
                  </div>

                </div>

                <div className="flex text-base font-semibold   content-center text-center">
                  <div className="w-1/4">
                    Legal
                  </div>

                  <div className="w-1/4">
                    Marketing
                  </div>

                  <div className="w-1/4">
                    Compliance
                  </div>

                  <div className="w-1/4">
                    Business Head
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className='flex items-center justify-end p-2'>
            <Button colorScheme='red' variant='solid' onClick={handlePreviewClick}>Preview</Button>
          </div>

        </div>
      </div>
    )
  }
  else {
    return (
      <div className='w-full bg-gray-100 h-full rounded-r-lg'>
        <div className='w-11/12 mx-auto p-2'>
          Applications are being fetched. Please wait
        </div>

      </div>
    )
  }
}

export default DisplayCard