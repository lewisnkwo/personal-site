import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "./styles/global.css";
import layoutStyles from "./components/pages/layout/index.css";
import headerStyles from "./components/shared/header/index.css";
import footerStyles from "./components/shared/footer/index.css";
import imageStyles from "./components/shared/image/index.css";
import sidebarStyles from "./components/shared/sidebar/index.css";
import sidebarItemStyles from "./components/shared/sidebar/sidebar-item/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lewis Nkwo",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: layoutStyles },
    { rel: "stylesheet", href: headerStyles },
    { rel: "stylesheet", href: footerStyles },
    { rel: "stylesheet", href: imageStyles },
    { rel: "stylesheet", href: sidebarStyles },
    { rel: "stylesheet", href: sidebarItemStyles },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

function Document({
  children,
  title = "Lewis Nkwo's Personal Website",
}: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <Document title="Oops!">
      <div className="ErrorBoundary--root">
        <h1>An error occurred</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
