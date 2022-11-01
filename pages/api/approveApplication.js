// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"
import transporter from "../../utils/nodemailerConfig";


function sendMail() {
  let mailOptions = {
    from: 'nabarunkar01@gmail.com', // TODO: email sender
    to: 'sounav2001saha@gmail.com', // TODO: email receiver, supports multiple addresses
    subject: 'Nodemailer - Test',
    text: 'This is an Alert!!!'
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error occurs: ', err);
    }
    else {
        console.log('Email sent!!!');
    }
  });
}


export default async function handler(req, res) {
  try {
    const {appID} = req.body;
    console.log('APP ID : ',appID)
  const query = `UPDATE public.applications SET "approvaltype" = "approvaltype"+ 1 where "appid" = '${appID}' `;
  const query2 = `Select * from public.applications where "appid" = '${appID}'`;
  const response = await conn.query(query);
  const response2 = await conn.query(query2);
  console.log(response);
  if (response) {
    console.log(response2.email);
    sendMail();
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
