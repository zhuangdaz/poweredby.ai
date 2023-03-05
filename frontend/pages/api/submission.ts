import { sendSubmission } from "@/lib/airtable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Invalid body" });
    }

    const body = JSON.parse(req.body);

    if (body.email && !validateEmail(body.email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!body.description) {
      return res.status(400).json({ error: "Invalid description" });
    }

    const response = await sendSubmission(body);

    res.status(200).json(response);
    return;
  }

  res.status(400).json({ error: "Method not allowed" });
}

// The most basic email validation
function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
