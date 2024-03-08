import {loadInstitutions }from "@/pages/services/institution"

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const allInstitutions = await loadInstitutions();
            return res.status(200).json(allInstitutions)
        }
    } catch (err) {
        console.log(err);
    }
}