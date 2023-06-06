import Layout from "~/components/pages/layout";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import aboutStyles from "../components/pages/content/about/index.css";
import About from "~/components/pages/content/about";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: aboutStyles }];
};

export const meta: MetaFunction = () => ({
  title: "Lewis Nkwo | About",
  description: "A little bit about me!",
});

export default function AboutRoute() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
