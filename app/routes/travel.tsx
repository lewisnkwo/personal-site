import { Outlet } from "@remix-run/react";
import Layout from "~/components/pages/layout";

export default function TravelRoute() {
  return (
    <Layout>
      <main>
        <Outlet />
      </main>
    </Layout>
  );
}
