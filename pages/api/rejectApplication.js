// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendEmail = (emailRec, appID, comments) => {
  const mailOptions = {
    to: emailRec,
    from: {
      email: process.env.SENDER_EMAIL,
      name: "TVS Credit - Approval Team",
    },
    templateId: 'd-f10d12c2e7c049c5a04d860e3170b7dc',
    dynamic_template_data: {
      AppID: appID, // in Sendgrid -> {{AppID}}
      rejCom: comments, // in Sendgrid -> {{rejCom}}
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
    const {appID,rejectionComments,email} = req.body;
    console.log('APP ID : ',appID);
    console.log('Rejection Comments : ', rejectionComments);
    console.log('Email : ', email);
    
  const query = `UPDATE public.applications SET "rejectionstatus" = true , "rejectioncomments" = '${rejectionComments}' where "appid" = '${appID}' `;
  const response = await conn.query(query);
  console.log(response);
  if (response) {
      sendEmail(email, appID, rejectionComments);
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
