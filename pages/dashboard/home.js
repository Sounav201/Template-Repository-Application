import Image from "next/image";
import React, { useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import LeftSidebar from "../../components/common/LeftSidebar";
import HomeComponent from "../../components/home/HomeComponent";
import axios from "axios";

const Home = ({ data }) => {
  const { user, setapplications } = useContext(AppContext);
  const { applicationsList } = data;
  useEffect(() => {
    if (user == "Executor") {
      setapplications(data.applicationsList);
    }
  }, [user]);

  return (
    <div className="bg-[#2E0C6D] h-screen">
      <LeftSidebar activeTab={"home"} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">
          <HomeComponent />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  var APIendpoint;
  if (process.env.NODE_ENV === "development") {
    APIendpoint = "http://localhost:3000/api/fetchApplication";
  } else if (process.env.NODE_ENV === "production") {
    APIendpoint = "https://templaterepo.vercel.app/api/fetchApplication";
  }

  let res = await axios.get(APIendpoint);
  let data = await res.data;

  function buildApplicationStatus(approvalType, rejectionStatus) {
    let applicationStatus = {
      legal: "",
      marketing: "",
      compliance: "",
      businessHead: "",
    };
    if (!rejectionStatus) {
      switch (approvalType) {
        case 1:
          applicationStatus = {
            legal: "pending",
            marketing: "onhold",
            compliance: "onhold",
            businessHead: "onhold",
          };
          break;
        case 2:
          applicationStatus = {
            legal: "approved",
            marketing: "pending",
            compliance: "onhold",
            businessHead: "onhold",
          };
          break;
        case 3:
          applicationStatus = {
            legal: "approved",
            marketing: "approved",
            compliance: "pending",
            businessHead: "onhold",
          };
          break;
        case 4:
          applicationStatus = {
            legal: "approved",
            marketing: "approved",
            compliance: "approved",
            businessHead: "pending",
          };
          break;
        case 5:
          applicationStatus = {
            legal: "approved",
            marketing: "approved",
            compliance: "approved",
            businessHead: "approved",
          };
          break;
        default:
          break;
      }
    } else {
      switch (approvalType) {
        case 1:
          applicationStatus = {
            legal: "rejected",
            marketing: "onhold",
            compliance: "onhold",
            businessHead: "onhold",
          };
          break;
        case 2:
          applicationStatus = {
            legal: "approved",
            marketing: "rejected",
            compliance: "onhold",
            businessHead: "onhold",
          };
          break;
        case 3:
          applicationStatus = {
            legal: "approved",
            marketing: "approved",
            compliance: "rejected",
            businessHead: "onhold",
          };
          break;
        case 4:
          applicationStatus = {
            legal: "approved",
            marketing: "approved",
            compliance: "approved",
            businessHead: "rejected",
          };
        default:
          break;
      }
    }
    return applicationStatus;
  }

  function getDepartmentBlocked(approvalType) {
    if (approvalType == 1) return "Legal";
    if (approvalType == 2) return "Marketing";
    if (approvalType == 3) return "Compliance";
    if (approvalType == 4) return "Business Head";
    if (approvalType > 4) return "None";
    else return "Blocked";
  }

  //  {id:2,name:"Sanction Letter", applicationID:"SANCTION-734", createdAt:"2022-08-21", statusSummary:"Pending", departmentBlocked:"Compliance",
  //applicationStatus : {legal:'done',marketing:'done',compliance:'pending',businessHead:'onhold'}},
  //appid,apptype,createdon,approvaltype,email,rejectionstatus,rejectioncomments,
  let applicationData = data.applications;
  var applicationList = [];
  var applicationData2 = data.applications.map((item) => {
    var applicationRow = item;

    applicationRow["applicationStatus"] = buildApplicationStatus(
      item.approvaltype,
      item.rejectionstatus
    );
    applicationRow["departmentBlocked"] = getDepartmentBlocked(
      item.approvaltype
    );
    applicationRow["statusSummary"] = item.rejectionstatus
      ? "Rejected"
      : item.approvaltype < 5
      ? "Pending"
      : "Approved";
    applicationList.push(applicationRow);
  });

  data["applicationsList"] = applicationList;

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Home;
