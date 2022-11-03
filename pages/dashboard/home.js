import Image from 'next/image'
import React, { useContext ,useEffect} from 'react'
import AppContext from '../../AppContext'
import LeftSidebar from '../../components/common/LeftSidebar'
import HomeComponent from '../../components/home/HomeComponent'
import axios from 'axios';


const Home = ({data}) => {

    const {user,setapplications} = useContext(AppContext);
    const {applicationsList} = data;
    useEffect(() => {
        if(user=="Executor")
        {
            setapplications(data.applicationsList);
        }

    },[user])
    
    return (
    
    <div className='bg-[#2E0C6D] h-screen'>
    <LeftSidebar activeTab={"home"} />
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        {/* <div className="sticky top-0 h-16 border-b bg-[#0F0C4C] lg:py-2.5">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                <h5 className="text-2xl text-gray-200 font-medium lg:block">Dashboard</h5>
                <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="flex space-x-4">
                    {/* <!--search bar --> */}
                    {/* <div hidden className="md:block">
                        <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                            <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                            <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                            </svg>
                            </span>
                            <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-white outline-none border border-gray-300 focus:border-cyan-300 transition" />
                        </div>
                    </div>
                    <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                        </svg>
                    </button>
                    */}
                    {/* <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>  */}
    
        <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">
            
                <HomeComponent />
        </div>
    </div>
                                    </div>
  )
}

export async function getServerSideProps(context) {
    var APIendpoint;
    if (process.env.NODE_ENV === 'development') {
        APIendpoint = 'http://localhost:3000/api/fetchApplication'
    }
    else if(process.env.NODE_ENV === 'production'){
        APIendpoint = 'https://templaterepo.vercel.app/api/fetchApplication';
    }

    let res =  await axios.get(APIendpoint);
    let data = await res.data;

    function buildApplicationStatus(approvalType, rejectionStatus){
        let applicationStatus = {legal:'',marketing:'',compliance:'',businessHead:''};
        if(!rejectionStatus){
        switch (approvalType) {
            case 1:
                applicationStatus = {legal:'pending',marketing:'onhold',compliance:'onhold',businessHead:'onhold'};
                break;
            case 2:
                applicationStatus = {legal:'approved',marketing:'pending',compliance:'onhold',businessHead:'onhold'};
                break;
            case 3:
                applicationStatus = {legal:'approved',marketing:'approved',compliance:'pending',businessHead:'onhold'};
                break;
            case 4:
                applicationStatus = {legal:'approved',marketing:'approved',compliance:'approved',businessHead:'pending'};  
                break;
            case 5:
                applicationStatus = {legal:'approved',marketing:'approved',compliance:'approved',businessHead:'approved'};
                break; 
            default:
                break;
        }

        }
        else{
            switch (approvalType) {
                case 1:
                    applicationStatus = {legal:'rejected',marketing:'onhold',compliance:'onhold',businessHead:'onhold'};
                    break;
                case 2:
                    applicationStatus = {legal:'approved',marketing:'rejected',compliance:'onhold',businessHead:'onhold'};
                    break;
                case 3:
                    applicationStatus = {legal:'approved',marketing:'approved',compliance:'rejected',businessHead:'onhold'};
                    break;
                case 4:
                    applicationStatus = {legal:'approved',marketing:'approved',compliance:'approved',businessHead:'rejected'};
                default:
                    break;
            }
        }
        return applicationStatus;


    }

    function getDepartmentBlocked(approvalType){
        if(approvalType == 1)
            return "Legal";
        if(approvalType == 2)
            return "Marketing";
        if(approvalType == 3)
            return "Compliance";
        if(approvalType == 4)
            return "Business Head";
        if(approvalType >4)
            return "None";
        else
            return "Blocked";
            
        
    }

    
    //  {id:2,name:"Sanction Letter", applicationID:"SANCTION-734", createdAt:"2022-08-21", statusSummary:"Pending", departmentBlocked:"Compliance", 
    //applicationStatus : {legal:'done',marketing:'done',compliance:'pending',businessHead:'onhold'}},  
    //appid,apptype,createdon,approvaltype,email,rejectionstatus,rejectioncomments,
    //Do necessary computation and build the data structure here
    let applicationData = data.applications;
//    console.log("Data in server : " ,applicationData)
    var applicationList = []
    var applicationData2 = data.applications.map((item) => {
        var applicationRow = item;


        applicationRow["applicationStatus"] = buildApplicationStatus(item.approvaltype,item.rejectionstatus);
        applicationRow["departmentBlocked"] = getDepartmentBlocked(item.approvaltype);
        applicationRow["statusSummary"] = item.rejectionstatus ? "Rejected" : item.approvaltype <5 ?  "Pending" :  "Approved";
        applicationList.push(applicationRow);

    })

    //console.log("Application Data 2 : " ,applicationList)
   // console.log("Environment : ",process.env.NODE_ENV)

    
    data["applicationsList"] = applicationList
    //console.log(data);
   
    return {
      props: {data}, // will be passed to the page component as props
    }
  }
export default Home