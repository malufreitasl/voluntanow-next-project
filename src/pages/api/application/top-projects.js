import { loadTopByProjects } from "@/pages/services/application";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allTopProjects = await loadTopByProjects();
            return res.status(200).json(allTopProjects)
        }
    } catch (err) {
        console.log(err);
    }
}
