import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import LeftSidebar from "../../components/common/LeftSidebar";
import Router, { useRouter } from "next/router";
import AppContext from "../../AppContext";
import Swal from "sweetalert2";

const Preview = () => {
  const [previewapplicationBody, setpreviewapplicationBody] = useState(null);
  const router = useRouter();
  const { user, userEmail } = useContext(AppContext);

  useEffect(() => {
    if (typeof window != undefined) {
      if (localStorage.getItem("applicationBody")) {
        let previewContent = JSON.parse(
          localStorage.getItem("applicationBody")
        );
        setpreviewapplicationBody(previewContent);
      }
    }
  }, []);

  const Sendapplicationhandler = async () => {
    const email = userEmail;
    const appbody = previewapplicationBody;
    const apptype = "Sanction Letter";
    const tempid = "1";
    const userRole = user;
    const res = await fetch("/api/createApplication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, appbody, apptype, tempid, userRole }),
    });
    const data = await res.json();
    if (data.message == "ok") {
      const appID = data.appID;
      Swal.fire(
        "Good job!",
        `Your application having ID ${appID} has been sent for review!`,
        "success"
      );
      if (localStorage.getItem("applicationBody"))
        localStorage.removeItem("applicationBody");
      if (localStorage.getItem("applicationVariables"))
        localStorage.removeItem("applicationVariables");
      if (localStorage.getItem("applicationLanguage"))
        localStorage.removeItem("applicationLanguage");

      router.push("/dashboard/home");
    }
  };

  return (
    <div className="bg-[#2E0C6D] h-full pb-12">
      <LeftSidebar activeTab={"create"} />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">
          <h2 className="my-2 mb-8 text-white text-4xl text-center">Preview</h2>
          {user === "Executor" && (
            <div className="p-1 flex items-center justify-between my-4  w-5/6 mx-auto ">
              <Button colorScheme="red" onClick={() => router.back()}>
                Go Back
              </Button>
              <Button colorScheme="whatsapp" onClick={Sendapplicationhandler}>
                Send for Approval
              </Button>
            </div>
          )}
          {user.includes("Approver") && (
            <div className="p-1 flex items-center justify-between my-4  w-5/6 mx-auto ">
              <Button colorScheme="messenger" onClick={() => router.back()}>
                Go Back
              </Button>
              <Button colorScheme="whatsapp">Approve</Button>
              <Button colorScheme="red">Reject</Button>
            </div>
          )}

          {previewapplicationBody && (
            <div
              className="   w-5/6 mx-auto p-1 mb-12"
              dangerouslySetInnerHTML={{ __html: previewapplicationBody }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
