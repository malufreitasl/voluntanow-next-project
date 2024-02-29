import { loadProjects } from "@/pages/services/project";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allProjects = await loadProjects();
            return res.status(200).json({ allProjects })
        }
    } catch (err) {
        console.log(err);
    }
}