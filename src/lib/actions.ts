'use server';

import { unstable_noStore } from 'next/cache';
import { Client, LibraryResponse, SendEmailV3_1 } from 'node-mailjet';

export async function sendEmail(
  fullname: string,
  email: string,
  title: string,
  message: string,
) {
  const mailjet = new Client({
    apiKey: process.env.MAILJET_API_KEY!,
    apiSecret: process.env.MAILJET_SECRET!,
  });

  const data: SendEmailV3_1.Body = {
    Messages: [
      {
        From: {
          Email: 'avukalov.develop@gmail.com',
          Name: 'avukalov.dev',
        },
        To: [
          {
            Email: 'avukalov.develop@gmail.com',
            Name: 'avukalov.dev',
          },
        ],
        Subject: `avukalov.com - Contact - ${title}`,
        TextPart: '',
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
      .post('send', { version: 'v3.1' })
      .request(data);

    const { Status } = result.body.Messages[0];

    return Status;
  } catch (error) {
    return error;
  }
}

export async function getProjects() {
  unstable_noStore();

  const response = await fetch(
    // `${process.env.STRAPI_API_URL!}/projects?filters[isPublic][$eq]=true`,
    `${process.env.STRAPI_API_URL!}/projects?filters[isPublic][$eq]=true&populate=tags&order=priority`,
    {
      // This will allow cache to stay for 1 month and revalidate every 2 weeks
      next: { revalidate: 1209600 }, // Revalidate after 2 weeks (in the background)
      headers: {
        // 'Cache-Control':
        //   'public, max-age=2592000, stale-while-revalidate=1209600',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        // Cache for 1 month (2592000 seconds) and allow stale data while revalidating every 2 weeks
      },
    },
  );

  const { data, meta } = await response.json();

  return { projects: data, pagination: meta.pagination };
}
