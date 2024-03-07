import { decryptToken } from "@/pages/services/encryption";
import { loadUserId } from "@/pages/services/user";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const token = req.headers["authorization"]
            if (!token) {
                return res.status(400).json({ message: "Authorization token wasn't sent" })
            }
            const decryptedToken = decryptToken(token);
            const userId = await loadUserId(decryptedToken); 

            return res.status(200).json(userId);
        } else {
            return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}