import { createProject } from "@/pages/services/project";

export default async function handler(req, res) {
    const projectInfo = req.body

    try {
        if (req.method === "POST") {
            if (await createProject(projectInfo)){
                return res.status(200).json({ "message": "Successfully created project" });
            };
        } return res.status(404).json({ "message": "bad request"});
    } catch (err) {
        console.log(err);
    }
}