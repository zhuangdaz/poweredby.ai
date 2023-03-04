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
    const select = {
      filterByFormula: ``,
      offset: 0,
    };

    base("products")
      .select(select)
      .eachPage(
        (records, fetchNextPage) => {
          records.map((record) => {
            let attachments: Attachment[] = record.get(
              "images"
            ) as Attachment[];

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

export { getAllProducts };
