import { createUser } from "@/pages/services/signup";


export default async function handler(req, res) {
    try {        
        const userInfo = req.body
        if (req.method === "POST") {
            const result = await createUser(userInfo)
            
            if (result.acknowledged){
                return res.status(201).json({
                    "message": "Successfully created user",
                });
            } return res.status(400).json({
                message: "Something went wrong while trying to create user",
            })
        } return res.status(400).json({
            message: "Bad Request.",
        })
    } catch (err) {
        console.log(err);
    }
}