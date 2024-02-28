import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../../app/components/email-template";
import { useState } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email , name } = req.body;
  const { method } = req;
  


  if (method === "POST") {
    if (!email || !name) {
      return res.status(400).json({ message: "Missing fields" });
    }

    try {
      await resend.emails.send({
        from: "ONEX <welcome@onex.zip>",
        to: [email],
        subject: "Newsletter Confirmation",
        html: "",
        react: EmailTemplate({userFirstname:name}),
      });
      res.status(200).json({ success: true });
    } catch (error) {
      // Perform a type assertion to treat the error as an object with a 'message' property
      const typedError = error as { message?: string };
      res.status(400).json({ success: false, message: typedError.message || 'An unknown error occurred' });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};
