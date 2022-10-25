import React, { useState,useEffect,useContext } from 'react'
import DisplayCard from './DisplayCard'
import List from './List'
import dayjs from 'dayjs'
import AppContext from '../../../AppContext'


const ApplicationHub = () => {

  const {user,setuser,userEmail, setuserEmail,applications, setapplications} = useContext(AppContext)
  console.log("Applications: ",applications)

  const applicationList =[
  {id:1,name:"Loan Agreement 1", applicationID:"LOAN-1234", createdAt:"2022-08-11", statusSummary:"Pending", departmentBlocked:"Marketing", applicationStatus : {legal:'approved',marketing:'pending',compliance:'onhold',businessHead:'onhold'}}, 
  {id:2,name:"Sanction Letter", applicationID:"SANCTION-734", createdAt:"2022-08-21", statusSummary:"Pending", departmentBlocked:"Compliance", applicationStatus : {legal:'approved',marketing:'approved',compliance:'pending',businessHead:'onhold'}},  
  {id:3,name:"Legal Notice 1", applicationID:"LEGAL-694", createdAt:"2022-03-04", statusSummary:"Pending", departmentBlocked:"Compliance", applicationStatus : {legal:'approved',marketing:'approved',compliance:'pending',businessHead:'onhold'}},  
  {id:4,name:"Loan Agreement 2", applicationID:"LOAN-46", createdAt:"2022-10-10", statusSummary:"Approved", departmentBlocked:"None", applicationStatus : {legal:'approved',marketing:'approved',compliance:'approved',businessHead:'approved'}}, 
  {id:5,name:"TDS Certificate", applicationID:"TDS-13301", createdAt:"2022-03-17", statusSummary:"Pending", departmentBlocked:"Legal", applicationStatus : {legal:'pending',marketing:'onhold',compliance:'onhold',businessHead:'onhold'}}  ]

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
  if(selectedApplication == null && applicationList.length>0)
  {
    setselectedApplication(applications[0])
  }

}, [applications])


  return (
    <div className='w-full p-1 rounded-lg shadow-lg border-white border-solid border-2'>
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
    </div>
  )
}

export default ApplicationHub