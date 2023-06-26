import { db } from "~/utils/db.server";
import Layout from "~/components/pages/layout";
import Home from "~/components/pages/content/home";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import homeStyles from "../components/pages/content/home/index.css";
import postItemStyles from "../components/shared/post-item/index.css";
import sidebarDetailStyles from "../components/shared/sidebar-detail/index.css";
import sidebarDetailPostItemStyles from "../components/shared/sidebar-detail/post-item/index.css";
import { useLoaderData } from "@remix-run/react";
import { toPost } from "~/utils/index.server";
import type { Post } from "~/types";

export const loader = async () => {
  const posts = await db.postModel.findMany({
    take: 4,
    orderBy: {
      updatedAt: "desc",
    },
  });
  return json({
    posts: posts.map(toPost),
  });
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: postItemStyles },
    { rel: "stylesheet", href: sidebarDetailStyles },
    { rel: "stylesheet", href: sidebarDetailPostItemStyles },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Lewis Nkwo | Frontend Software Engineer",
  description:
    "View the latest software engineering & travel inspired posts from Lewis Nkwo.",
});

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Home posts={data.posts as Post[]} />
    </Layout>
  );
}
