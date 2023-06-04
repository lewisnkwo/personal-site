import fs from "fs/promises";

export async function readMarkdown(fileName: string) {
  return await fs.readFile(`${process.env.PWD}/app/tutorials/${fileName}.mdx`);
}
