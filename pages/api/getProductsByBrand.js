// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { brand } = req.query;

  const jsonDirectory = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(
    jsonDirectory + "/products.json",
    "utf8"
  );

  const products = JSON.parse(fileContents);

  res.status(200).json(products[brand] ?? {});
}
