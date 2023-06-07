import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function readMarkdown(fileName: string) {
  return s3
    .getObject({
      Bucket: "lewisnkwosite",
      Key: `tutorials/${fileName}.md`,
    })
    .promise();
}
