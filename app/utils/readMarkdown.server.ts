import fs from "fs/promises";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function readMarkdown(fileName: string) {
  if (process.env.NODE_ENV === "production") {
    return await s3
      .getObject({
        Bucket: "lewisnkwosite",
        Key: `tutorials/${fileName}.md`,
      })
      .promise()
      .then((file) => file.Body?.toString());
  }

  return await fs
    .readFile(`${process.env.PWD}/app/tutorials/${fileName}.md`)
    .then((file) => file.toString());
}
