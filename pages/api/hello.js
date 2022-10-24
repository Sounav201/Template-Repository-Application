// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../utils/db"

export default async function handler(req, res) {
  try {
   
  const query = `Select * from public.users`;
  const results = await conn.query(query);

  if(results.rowCount>0)
  {
    res.status(200).json({ users: results.rows })
    res.status(201).json({ message: "No users found" });
  
  }
 
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  
}
