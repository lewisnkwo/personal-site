import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.postModel.findUnique({
    where: { id: params.postId },
  });

  if (!post) {
    throw new Error("Post not found.");
  }
  return json({ post });
};

export default function PostRoute() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.subTitle}</h4>
      <Link to=".">"{post.title}" Permalink</Link>
    </div>
  );
}
