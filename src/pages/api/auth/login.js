import { generateToken, login } from "@/pages/services/auth";

export default async function handler(req, res) {
    try {
        const { username, password } = req.body
        if (req.method === "POST") {
            const accountInfo = await login(username, password);
            if (!accountInfo) {
                return res.status(401).json({ message: "Invalid Login Data!" });
            } else {
                const token =  await generateToken(accountInfo);
                return res.status(200).json({ token });
            }
        }
        return res.status(404).json({ message: "User Not Found!" })
    } catch (err) {
        console.log(err);
    }
}