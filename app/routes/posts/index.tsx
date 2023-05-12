import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import ViewAllPosts from "~/components/pages/content/posts-view-all";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import viewAllPostsStyles from "~/components/pages/content/posts-view-all/index.css";
import { useCatch } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: viewAllPostsStyles }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const posts = await db.postModel.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, subtitle: true },
  });
  const user = await getUser(request);

  return json({
    posts,
    user,
  });
};

export default function PostsIndexRoute() {
  return <ViewAllPosts />;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div className="ErrorBoundary">There are no posts to display.</div>;
  }
  throw new Error(`Unexpected response with status: ${caught.status}`);
}

export function ErrorBoundary() {
  return (
    <div className="ErrorBoundary">
      Oops, something went wrong. Please try again later.
    </div>
  );
}
