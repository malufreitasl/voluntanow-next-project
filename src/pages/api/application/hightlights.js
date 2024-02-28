import { loadTopApplications } from "@/pages/services/application";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allTopApplications = await loadTopApplications();
            return res.status(200).json({ allTopApplications })
        }
    } catch (err) {
        console.log(err);
    }
}