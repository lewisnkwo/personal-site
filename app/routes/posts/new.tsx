import PostsNew from "~/components/pages/content/posts-new";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { validatePostBody, validatePostTitle } from "./validators";
import { getUserId, requireUserId } from "~/utils/session.server";
import { Link, useCatch } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (!userId) {
    throw new Response("Unauthorised", { status: 401 });
  }
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);
  const form = await request.formData();

  const title = form.get("title");
  const subtitle = form.get("subtitle");
  const slug = form.get("slug");
  const body = form.get("body");
  const category = form.get("category");

  if (
    typeof title !== "string" ||
    typeof subtitle !== "string" ||
    typeof slug !== "string" ||
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
    subtitle: validatePostTitle(subtitle, "subtitle"),
    slug: validatePostTitle(subtitle, "slug"),
    body: validatePostBody(body),
  };

  const fields = {
    title,
    subtitle,
    slug,
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

  const post = await db.postModel.create({ data: { ...fields, userId } });
  return redirect(`/posts/${post.slug}`);
};

export default function PostsNewRoute() {
  return <PostsNew />;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 401) {
    return (
      <div className="ErrorBoundary">
        <p>You must be logged in to create a new post.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export function ErrorBoundary() {
  return (
    <div className="ErrorBoundary">
      Oops, something went wrong. Please try again later.
    </div>
  );
}
