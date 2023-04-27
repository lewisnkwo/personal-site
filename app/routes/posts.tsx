import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import postNewStyles from "../components/pages/content/post-add/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: postNewStyles }];
};

export default function PostsRoute() {
  return (
    <Layout>
      <main>
        <Outlet />
      </main>
    </Layout>
  );
}
