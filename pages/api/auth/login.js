import conn from "../../../utils/db";
import { serialize } from 'cookie';
import * as jose from 'jose';

const secret = process.env.SECRET;

export default async function handler(req, res) {
    try {
        const { email, password,roleID } = req.body;
        const query = `Select * from public.users WHERE "email" = '${email}' AND "password"='${password}' AND "roleID"='${roleID}'`; 
        const results = await conn.query(query);

        
        if (results.rowCount > 0) {
            
            const jwtToken = await new jose.SignJWT({ email: email, roleID:roleID })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('30d')
                .sign(new TextEncoder().encode(`${secret}`));

            const serialized = serialize("TvsJWT", jwtToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });
            res.setHeader('Set-Cookie', serialized);
            let role = "";
            if (roleID == 1) {
                role = "Executor";
            }
            else if (roleID == 2) {
                role = "Creator";
            }
            else if (roleID == 3) {
                role = "Legal";
            }
            else if(roleID == 4){
                role = "Marketing";
            }
            else if(roleID == 5){
                role = "Compliance";
            }
            else if(roleID == 6)
            {
                role = "Business Head";
            }

            return res.status(200).json({ message: "Login Successful", token: jwtToken , role:role, email:email });

        }
        else {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Something went wrong! Please check console"});
        
    }

}