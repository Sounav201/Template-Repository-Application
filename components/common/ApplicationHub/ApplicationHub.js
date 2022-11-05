import React, { useState,useEffect,useContext } from 'react'
import DisplayCard from './DisplayCard'
import List from './List'
import dayjs from 'dayjs'
import AppContext from '../../../AppContext'
import ApprovalList from './ApprovalList'


const ApplicationHub = () => {

  const {user,setuser,userEmail, setuserEmail,applications, setapplications} = useContext(AppContext)

 const [selectedApplication, setselectedApplication] = useState(applications!=undefined && applications.length>0 ?  applications[0]: null)
 


 const handleSelection = (ID) => {
  const index = applications.findIndex((item) => ID===item.appid);
  if(index!=-1)
  setselectedApplication(applications[index]);

 }




useEffect(() => {
  console.log('Selected Application : ', selectedApplication);
}, [selectedApplication]);

useEffect(() => {
  if(selectedApplication == null &&applications.length>0)
  {
    const candidateApplication = applications[0].rejectionStatus ? applications[1] : applications[0];
    setselectedApplication(candidateApplication)
  }
  function removeRejectionApplication()
  {
    const index = applications.findIndex((item) => item.rejectionstatus);
    //console.log(index)
    if(index!=-1)
    {
      const newApplications = [...applications];
      newApplications.splice(index,1);
  //    console.log("new application list without rejected one : ", newApplications)
      setapplications(newApplications);
    }
  }

  if(user.includes("Approver") && applications.length>0)
  {
    removeRejectionApplication();
  }

}, [applications])




  return (
    <div className='w-full p-1 rounded-lg shadow-lg overflow-auto  border-white border-solid border-2'>
        
        {user.includes("Approver") ? <div>
          <ApprovalList applications={applications} />
        </div>: user.includes("Executor") &&  (<>
          {applications.length > 0 &&
        (
          <div className='grid grid-cols-12'>
          <div className='col-span-4'>
          <List applications={applications} handleSelection={handleSelection}/>

          </div>
          <div className='col-span-8'>
          <DisplayCard selectedApplication={selectedApplication} />
          </div>
          

        </div>
 
        )}
</>)}
    </div>
  )
}

export default ApplicationHub