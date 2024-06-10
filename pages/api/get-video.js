import { list } from "@vercel/blob";

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;
	
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log("body: ", body);
	
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.fileName) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: "Please fill out both fields" });
    }

    const getUrl = async () => {
        let { blobs } = await list({
            prefix: body.fileName,
            limit: 1,
            token: process.env.BLOB_READ_WRITE_TOKEN
        });
        console.log({blobs, t: process.env.BLOB_READ_WRITE_TOKEN});
        return blobs[0].url;
    };
    const url = getUrl();
	
   
    res.status(200).json({ url });
}