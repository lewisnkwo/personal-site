import fs from "fs/promises";

const path =
  process.env.NODE_ENV === "production"
    ? `${process.env.VERCEL_URL}/build/`
    : `${process.env.PWD}/app/tutorials/`;

export async function readMarkdown(fileName: string) {
  return await fs.readFile(`${path}${fileName}.md`);
}
