// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"

export default async function handler(req, res) {
  try {
    const {appID,rejectionComments} = req.body;
    console.log('APP ID : ',appID );
    console.log('Rejection Comments : ', rejectionComments);
    
  const query = `UPDATE public.applications SET "rejectionstatus" = true , "rejectioncomments" = '${rejectionComments}' where "appid" = '${appID}' `;
  const response = await conn.query(query);
  console.log(response);
  if (response) {
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
