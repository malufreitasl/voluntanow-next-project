import { createApplication } from "@/pages/services/application";

export default async function handler(req, res) {
    const {institution_id, project_id, volunteer_id} = req.body

    try {
        if (req.method === "POST") {
            if (await createApplication(institution_id, project_id, volunteer_id)){
                return res.status(200).json({ "message": "Successfully created application" });
            };
        } return res.status(404).json({ "message": "bad request"});
    } catch (err) {
        console.log(err);
    }
}