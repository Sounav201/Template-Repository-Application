// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"

export default async function handler(req, res) {
  try {
   const {appID} = req.body;

  const query = `Select * from public.applications where "appid" = '${appID}'`;

  const results = await conn.query(query);
  console.log(results.rows[0]);

  if(results.rowCount>0)
  {
    res.status(200).json({ application: results.rows });
  
  }
  else{
    res.status(201).json({ message: `No application found having ID ${appID}` });
  
  }
 
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" ,error:error });
  }
  
}
