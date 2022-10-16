import { serialize } from "cookie";

export default async (req,res) => {

    const {cookies} = req;
    const jwt = cookies.TvsJWT;
    if (req.method !== 'POST') return res.status(405).json({ status: 'fail', message: 'Method not allowed here!' });


    if (!jwt) {

        return res.json({ message: "User not logged in" })

    }

    else {

    if(req.body.key === 'static_key'){

        const serialized = serialize("TvsJWT", null, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: -1,
            path: "/"
        });
        res.setHeader('Set-Cookie', serialized);

        return res.status(200).json({ message: "Successfully logged out!" });
    }

    return res.status(400).json({ status: 'fail', message: 'Bad request happened!' });

    }

}