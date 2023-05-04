import PostsNew from "~/components/pages/content/posts-new";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { validatePostBody, validatePostTitle } from "./validators";

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
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly.",
    });
  }

  const fieldErrors = {
    title: validatePostTitle(title, "title"),
    subTitle: validatePostTitle(subTitle, "subtitle"),
    body: validatePostBody(body),
  };

  const fields = {
    title,
    subTitle,
    body,
    category,
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  const post = await db.postModel.create({ data: fields });
  return redirect(`/posts/${post.id}`);
};

export default function PostsNewRoute() {
  return <PostsNew />;
}
