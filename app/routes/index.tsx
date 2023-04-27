import Layout from "~/components/pages/layout";
import Home from "~/components/pages/content/home";
import type { LinksFunction } from "@remix-run/node";
import homeStyles from "../components/pages/content/home/index.css";
import homePostItemStyles from "../components/pages/content/home/post-item/index.css";
import sidebarDetailStyles from "../components/shared/sidebar-detail/index.css";
import sidebarDetailPostItemStyles from "../components/shared/sidebar-detail/post-item/index.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: homeStyles },
    { rel: "stylesheet", href: homePostItemStyles },
    { rel: "stylesheet", href: sidebarDetailStyles },
    { rel: "stylesheet", href: sidebarDetailPostItemStyles },
  ];
};

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
