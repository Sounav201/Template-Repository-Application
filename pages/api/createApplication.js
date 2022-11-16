// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db";
import generateAppID from "../../utils/generateAppID";

export default async function handler(req, res) {
  try {
    const { email, appbody, apptype, tempid, userRole } = req.body;
    const appID = generateAppID();
    const approvalType = 1;
    const createdOn = new Date().toDateString();
    const rejectionStatus = false;
    const rejectionComments = "";
    console.log("In API create Application", userRole);
    if (userRole == "Executor") {
      const query = `INSERT into public.applications ("appid","tempid","applicationtype","appbody","approvaltype","rejectionstatus","rejectioncomments","createdon","email") 
    VALUES 
('${appID}','${tempid}','${apptype}','${appbody}','${approvalType}','${rejectionStatus}','${rejectionComments}','${createdOn}','${email}');`;

      const response = await conn.query(query);
      if (response) {
        res.status(201).json({ message: "ok", appID: appID });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
