import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import ViewAllPosts from "~/components/pages/content/posts-engineering";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import postItemStyles from "~/components/shared/post-item/index.css";
import viewAllPostsStyles from "~/styles/viewAllPosts.css";
import { useCatch } from "@remix-run/react";
import { toPostPartial } from "~/utils/index.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: viewAllPostsStyles },
    { rel: "stylesheet", href: postItemStyles },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Lewis Nkwo | All Engineering Posts",
  description: "View all engineering posts from Lewis Nkwo.",
});

export const loader = async ({ request }: LoaderArgs) => {
  const posts = await db.postModel.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, subtitle: true, slug: true },
    where: {
      category: 'Engineering',
    }
  });
  const user = await getUser(request);

  return json({
    posts: posts.map(toPostPartial),
    user,
  });
};

export default function PostsIndexRoute() {
  return <ViewAllPosts />;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div className="ErrorBoundary">There are no engineering posts to display.</div>;
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
