import { loadAllInstitutionInfo } from "@/pages/services/application";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allTopInstitutions = await loadAllInstitutionInfo();
            return res.status(200).json(allTopInstitutions)
        }
    } catch (err) {
        console.log(err);
    }
}
