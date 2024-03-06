import { loadApplication } from "@/pages/services/application";

export default async function handler(req, res) {
    const {institution_id, project_id, volunteer_id} = req.body

    try {
        if (req.method === "POST") {
            const response = await loadApplication(institution_id, project_id, volunteer_id)
            if (response){
                return res.status(200).json(response);
            };
        } return res.status(404).json({ "message": "bad request"});
    } catch (err) {
        console.log(err);
    }
}