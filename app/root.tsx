import { json, type LinksFunction, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import globalStyles from "./styles/global.css";
import layoutStyles from "./components/pages/layout/index.css";
import headerStyles from "./components/shared/header/index.css";
import footerStyles from "./components/shared/footer/index.css";
import imageStyles from "./components/shared/image/index.css";
import sidebarStyles from "./components/shared/sidebar/index.css";
import sidebarItemStyles from "./components/shared/sidebar/sidebar-item/index.css";
import SiteError from "./components/shared/error";

declare global {
  interface Window {
    ENV: {
      TYPE: "production" | "development" | "test";
    };
  }
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Lewis Nkwo",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400..700",
    },
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

export async function loader() {
  return json({
    ENV: {
      TYPE: process.env.NODE_ENV,
    },
  });
}

function Document({
  children,
  title = "Lewis Nkwo's Personal Website",
}: DocumentProps) {
  const data = useLoaderData<typeof loader>();

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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
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

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <SiteError>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </SiteError>
    </Document>
  );
}

interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.error(error);
  return (
    <Document title="Oops!">
      <SiteError>
        <>
          <h1>An error occurred</h1>
          <pre>{error.message}</pre>
        </>
      </SiteError>
    </Document>
  );
}
