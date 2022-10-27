// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"

export default async function handler(req, res) {
  try {
   const {approverID} = req.body;

  const query = `Select * from public.applications where "approvaltype" = '${approverID}'`;

  const results = await conn.query(query);

  if(results.rowCount>0)
  {
    res.status(200).json({ applications: results.rows });
  
  }
  else{
    res.status(201).json({ message: `No applications found having approverID ${approverID}` });
  
  }
 
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" ,error:error });
  }
  
}
