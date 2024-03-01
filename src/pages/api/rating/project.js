import { loadProjectMeanRating } from "@/pages/services/rating";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const { id } = req.query;
            const projectMeanRating = await loadProjectMeanRating(id);
            if (projectMeanRating) {
                return res.status(200).json(projectMeanRating);
            } else {
                return res.status(404).json({ error: "Project not found" });
            }
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
