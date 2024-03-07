import { checkEmailAvailability, checkUsernameAvailability } from "@/pages/services/signup";

export default async function handler(req, res) {
    try {        
        const { username, email, role } = req.body
        if (req.method === "POST") {
            const usernameCheck= await checkUsernameAvailability(username, role)
            if (usernameCheck.length === 0) {
                const emailCheck = await checkEmailAvailability(email, role)
                if (emailCheck.length === 0) {
                    return res.status(201).json({
                        "message": "Valid SignUp Data!",
                    });
                } return res.status(400).json({
                    message: "Invalid Data",
                    error: "Email já está registado"
                });
            }
            return res.status(400).json({
                message: "Invalid Data",
                error: "Username Indisponível"
            });
        } return res.status(400).json({
            message: "Invalid Data.",
        })
    } catch (err) {
        console.log(err);
    }
}