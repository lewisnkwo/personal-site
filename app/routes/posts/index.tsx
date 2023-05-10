import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import ViewAllPosts from "~/components/pages/content/posts-view-all";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import viewAllPostsStyles from "~/components/pages/content/posts-view-all/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: viewAllPostsStyles }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const posts = await db.postModel.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, subTitle: true },
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
