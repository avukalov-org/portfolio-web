"use server";

import { Client, LibraryResponse, SendEmailV3_1 } from "node-mailjet";

export async function sendEmail(
  fullname: string,
  email: string,
  title: string,
  message: string
) {
  const mailjet = new Client({
    apiKey: process.env.MAILJET_API_KEY!,
    apiSecret: process.env.MAILJET_SECRET!,
  });

  const data: SendEmailV3_1.Body = {
    Messages: [
      {
        From: {
          Email: "avukalov.develop@gmail.com",
          Name: "avukalov.dev",
        },
        To: [
          {
            Email: "avukalov.develop@gmail.com",
            Name: "avukalov.dev",
          },
        ],
        Subject: `avukalov.com - Contact - ${title}`,
        TextPart: "",
        HTMLPart: `
          <div>
            <p>Fullname: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Title: ${title}</p>
            <hr />
            <p>Message:<br />${message}</p>
          </div>
        `,
      },
    ],
  };

  try {
    const result: LibraryResponse<SendEmailV3_1.Response> = await mailjet
      .post("send", { version: "v3.1" })
      .request(data);

    const { Status } = result.body.Messages[0];

    return Status;
  } catch (error) {
    return error;
  }
}
