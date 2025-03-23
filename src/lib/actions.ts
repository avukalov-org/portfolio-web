'use server';

// import { unstable_noStore as noSort } from 'next/cache';
import { Client, LibraryResponse, SendEmailV3_1 } from 'node-mailjet';
import { Project } from './definitions';

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
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({
      fetchPolicy: "no-cache",
      query: `
        query Projects {
          projects(where: {isPublic: true}, orderBy: priority_ASC) {
            id
            title
            slug
            description
            isPublic
            sourceUrl
            liveUrl
            liveUser
            livePassword
            priority
            updatedAt
            image {
              id
              url
            }
            tags {
              id
              name
              image {
                id
                url
              }
            }
          }
        }
      `,
    }),
  });
  const json = await response.json();

  const projects = json.data.projects as Project[];

  const project = projects[0];
  console.info(project.title);
  console.info(project.liveUrl);
  console.info(project.sourceUrl);

  return projects;
}
