// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendEmail = (emailRec, appID) => {
  const mailOptions = {
    to: emailRec,
    from: {
      email: process.env.SENDER_EMAIL,
      name: "TVS Credit - Approval Team",
    },
    templateId: 'd-d4d558307c0c4083a845f6b0a5c90bc9',
    dynamic_template_data: {
      AppID: appID, // in Sendgrid -> {{AppID}}
    },
  };
  sgMail.send(mailOptions)
  .then((res) => {
      console.log("Email Sent to: ", mailOptions.to)
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
