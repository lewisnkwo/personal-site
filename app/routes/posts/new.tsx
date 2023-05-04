import PostsNew from "~/components/pages/content/posts-new";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();

  const title = form.get("title");
  const subTitle = form.get("subTitle");
  const body = form.get("body");
  const category = form.get("category");

  if (
    typeof title !== "string" ||
    typeof subTitle !== "string" ||
    typeof body !== "string" ||
    typeof category !== "string"
  ) {
    throw new Error("Form data not submitted correctly.");
  }

  const fields = {
    title,
    subTitle,
    body,
    category,
  };

  const post = await db.postModel.create({ data: fields });
  return redirect(`/posts/${post.id}`);
};

export default function PostsNewRoute() {
  return <PostsNew />;
}
