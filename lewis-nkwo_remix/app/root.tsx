import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import layoutStyles from "./components/pages/layout/index.css";
import headerStyles from "./components/shared/header/index.css";
import mainStyles from "./components/shared/main/index.css";
import postItemStyles from "./components/shared/main/post-item/index.css";
import footerStyles from "./components/shared/footer/index.css";
import imageStyles from "./components/shared/image/index.css";
import sidebarStyles from "./components/shared/sidebar/index.css";
import sidebarItemStyles from "./components/shared/sidebar/sidebar-item/index.css";
import sidebarDetailStyles from "./components/shared/sidebar-detail/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: layoutStyles },
    { rel: "stylesheet", href: headerStyles },
    { rel: "stylesheet", href: mainStyles },
    { rel: "stylesheet", href: postItemStyles },
    { rel: "stylesheet", href: footerStyles },
    { rel: "stylesheet", href: imageStyles },
    { rel: "stylesheet", href: sidebarStyles },
    { rel: "stylesheet", href: sidebarItemStyles },
    { rel: "stylesheet", href: sidebarDetailStyles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
