import Airtable from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base: Airtable.Base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

export interface Product {
  name: string;
  link: string;
  postedAt: Date;
  tags: string[];
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const products: Product[] = await new Promise((resolve, reject) => {
    const products: any[] = [];
    const select = {
      filterByFormula: ``,
      offset: 0,
    };

    base("Products")
      .select(select)
      .eachPage(
        (records, fetchNextPage) => {
          records.map((record) => {
            products.push({
              name: record.get("Name"),
              link: record.get("Link") || null,
              postedAt: record.get("PostedAt"),
              tags: record.get("Tags") || [],
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
  res.status(200).json(products);
}
