export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const { details } = req.query; 
            const decodedQueryString = decodeURIComponent(details);


            return res.status(200).json(JSON.parse(decodedQueryString));
        } else {
            return res.status(405).json({ message: "Method not allowed" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
