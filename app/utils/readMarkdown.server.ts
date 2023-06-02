import fs from "fs/promises";

export async function readMarkdown(fileName: string) {
  const file = await fs.readFile(`${process.env.PWD}/tutorials/${fileName}.md`);
  return file.toString();
}
