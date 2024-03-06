import { loadAllProjectDataById } from "@/pages/services/project";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const { i } = req.query; 
            const allProjectInfo = await loadAllProjectDataById(i);
            return res.status(200).json(allProjectInfo);
        } else {
            return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
