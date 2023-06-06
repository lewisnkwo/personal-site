import { Outlet } from "@remix-run/react";
import Layout from "~/components/pages/layout";

export default function PostsRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
