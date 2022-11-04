// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"
const fs = require("fs") // for reading the pdf file
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_KEY)



export default async function handler(req, res) {
  try {
    const {docblob} = req.body
    const sendEmail = (docblob) => {
        const msgConfig = {
            to: "crush3d0re0s@gmail.com",
            from: "nabarunkar01@gmail.com",
            subject: "IMPORTANT - TVS CREDIT",
            text: "Please find attached the following document from TVS Credit",
            attachments: [
                {
                    content: docblob,
                    filename:"sanctionLetter.pdf",
                    type: "application/pdf",
                    disposition: "attachment",
                }
            ]
        }
        sgMail.send(msgConfig)
        .then((res) => {
            console.log("Email Sent to: ", msgConfig.to)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    sendEmail(docblob);
    res.status(200).json({ message: 'ok' });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  
}