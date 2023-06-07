import fs from "fs/promises";

const path =
  process.env.NODE_ENV === "production"
    ? process.env.VERCEL_URL
    : process.env.PWD;

export async function readMarkdown(fileName: string) {
  return await fs.readFile(`${path}/app/tutorials/${fileName}.md`);
}
