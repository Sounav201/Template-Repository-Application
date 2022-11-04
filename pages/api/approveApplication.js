// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendEmail = (emailRec, appID) => {
  const msgConfig = {
      to: emailRec,
      from: "nabarunkar01@gmail.com",
      subject: "Confirmation of Application Approval",
      text: `Your application having ID ${appID} has been fully approved.`
  }
  sgMail.send(msgConfig)
  .then((res) => {
      console.log("Email Sent to: ", msgConfig.to)
  })
  .catch((err) => {
      console.log(err)
  })
}

export default async function handler(req, res) {
  try {
    const {appID, email, approvalType} = req.body;
    console.log('APP ID : ',appID)
  const query = `UPDATE public.applications SET "approvaltype" = "approvaltype"+ 1 where "appid" = '${appID}' `;
  const response = await conn.query(query);
  console.log("Response from approve Application API : ",response);
  if (response) {
    if (approvalType == 4) {
    sendEmail(email, appID);
    }
  res.status(201).json({ message: "ok" });
  }
else{
    res.status(201).json({ message: "No application found with particular ID" });
  }
 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error. Check console" });
  }

}
