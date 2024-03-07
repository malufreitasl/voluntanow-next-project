import { loadUserApplication } from "@/pages/services/application";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { userID, projectID } = req.body
            const userApplication = await loadUserApplication(userID, projectID );
            return res.status(200).json(userApplication)
        }
    } catch (err) {
        console.log(err);
    }
}
