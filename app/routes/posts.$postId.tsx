import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import { toPost } from "~/utils";
import { db } from "~/utils/db.server";
import ViewSinglePost from "~/components/pages/content/posts-view-single";
import viewSinglePostStyles from "../components/pages/content/posts-view-single/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: viewSinglePostStyles }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.postModel.findUnique({
    where: { id: params.postId },
  });

  if (!post) {
    throw new Error("Post not found.");
  }
  return json({ post });
};

export default function PostViewRoute() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main>
        <ViewSinglePost post={toPost(post)} />
      </main>
    </Layout>
  );
}

export function ErrorBoundary() {
  const { postId } = useParams();
  return (
    <div className="ErrorBoundary">
      There was an error loading the post by the id {postId}.
    </div>
  );
}
