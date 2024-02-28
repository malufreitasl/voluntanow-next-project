import { loadTopByInstitutions } from "@/pages/services/application";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allTopInstitutions = await loadTopByInstitutions();
            return res.status(200).json(allTopInstitutions.flat())
        }
    } catch (err) {
        console.log(err);
    }
}
