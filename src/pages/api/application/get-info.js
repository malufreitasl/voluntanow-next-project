import { decryptToken } from "@/pages/services/encryption";
import { loadUserInfo } from "@/pages/services/user";
import { loadAllProjectDataById } from "../../services/project"
// import { createApplication } from "../../services/application"
import { findApplication } from "../../data/application"

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const { projectId } = req.query
            const token = req.headers["authorization"]

            if (!token) {
                return res.status(400).json({ message: "Authorization token wasn't sent" })
            }
            if (!projectId) {
                return res.status(400).json({ message: "The 'projectId' wasn't sent on Post body" })
            }

            const decryptedToken = decryptToken(token);
            const userInfo = await loadUserInfo(decryptedToken);

            const project = await loadAllProjectDataById(projectId);

            // verificar se ja nao esta inscrito
            let application = findApplication(project.institution_id, projectId, userInfo[0].volunteer_info._id)
            if(!application)
            {
                return res.status(200).json({});
            }

            return res.status(200).json({ "userInfo": userInfo, "project": project });
        } else {
            return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}