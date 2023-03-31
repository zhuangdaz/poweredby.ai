import Airtable, { Attachment } from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base: Airtable.Base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

export interface Product {
  name: string;
  link: string;
  creator: string;
  summary: string;
  description: string;
  images: string[];
  postedAt?: Date;
  tags: string[];
}

async function getAllProducts() {
  const products: Product[] = await new Promise((resolve, reject) => {
    const products: any[] = [];

    base("products")
      .select({
        sort: [{ field: "postedAt", direction: "desc" }],
        view: "Grid view",
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.map((record) => {
            try {
              let attachments: Attachment[] =
                (record.get("images") as Attachment[]) || [];

              products.push({
                name: record.get("name"),
                link: record.get("link") || null,
                creator: record.get("creator") || null,
                summary: record.get("summary") || null,
                description: record.get("description") || null,
                images: attachments.map((img) => img.url) || [],
                postedAt: record.get("postedAt"),
                tags: record.get("tags") || [],
              });
            } catch (e) {
              console.log("error inside eachPage => ", e);
              console.log(JSON.stringify(record));
            }
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject();
            return;
          }

          resolve(products);
        }
      );
  });

  return products;
}

export interface Submission {
  name: string;
  link: string;
  description: string;
  email: string;
}

async function sendSubmission({ name, link, description, email }: Submission) {
  const response = await new Promise((resolve, reject) => {
    const submittedAt = new Date().toISOString();
    base("submissions").create(
      [
        {
          fields: { name, link, description, email, submittedAt },
        },
      ],
      (err, records) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(records?.map((r) => r.id));
      }
    );
  });
  console.log(`sendSubmission response: ${JSON.stringify(response)}`);
  return response;
}

export { getAllProducts, sendSubmission };
