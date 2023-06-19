import type {
  ActionArgs,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData, useParams } from "@remix-run/react";
import Layout from "~/components/pages/layout";
import { toPost } from "~/utils/index.server";
import { db } from "~/utils/db.server";
import { readMarkdown } from "~/utils/readMarkdown.server";
import ViewSinglePost from "~/components/pages/content/posts-view-single";
import viewSinglePostStyles from "~/components/pages/content/posts-view-single/index.css";
import interactStyles from "~/components/shared/interact/index.css";
import { getUserId, requireUserId } from "~/utils/session.server";
import SiteError from "~/components/shared/error";
import type { Post } from "~/types";
import Interact from "~/components/shared/interact";
import { Provider as LyketProvider } from "@lyket/react";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: "Empty post",
      description: "No post found",
    };
  }
  return {
    title: `${data.post.title} | Lewis Nkwo`,
    description: data.post.subtitle,
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: viewSinglePostStyles },
    { rel: "stylesheet", href: interactStyles },
  ];
};

export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await getUserId(request);
  const post = await db.postModel.findUnique({
    where: { slug: params.postSlug },
  });

  if (!post?.slug) {
    throw new Response("Oops. Could not find the content for this post.", {
      status: 404,
    });
  }

  const markdown = await readMarkdown(post?.slug)
    .then((file) => file)
    .catch((e) => {
      console.log(e);
      throw new Response("Oops. Could read the content for this post.", {
        status: 404,
      });
    });

  if (!post) {
    throw new Response("Oops. Could not find post.", {
      status: 404,
    });
  }
  return json({
    post: toPost(post),
    isOwner: userId === post.userId,
    markdown,
  });
};

export const action = async ({ params, request }: ActionArgs) => {
  const form = await request.formData();

  if (form.get("action") !== "delete") {
    throw new Response(`The action ${form.get("action")} is not supported`, {
      status: 400,
    });
  }

  const userId = await requireUserId(request);
  const post = await db.postModel.findUnique({
    where: { id: params.postId },
  });

  if (!post) {
    throw new Response("Cannot delete a post that does not exist.", {
      status: 404,
    });
  }

  if (post.userId !== userId) {
    throw new Response("Cannot delete a post from another user.", {
      status: 403,
    });
  }

  await db.postModel.delete({ where: { id: params.postId } });
  return redirect("/posts");
};

export default function PostViewRoute() {
  const { post } = useLoaderData<typeof loader>();

  const shareTitle = `${post.title} by Lewis Nkwo`;
  const shareUrl = `https://lewisnkwo.com/posts/${post.slug}`;

  const actionFillColor = "#88C0D0";

  return (
    <LyketProvider
      apiKey="pt_f6a55995b70f934d74f21da89f2525"
      theme={{
        colors: {
          background: actionFillColor,
          text: "#2e3440",
          primary: "#6b6c6c",
          icon: "#ffffff",
          highlight: "#6b6c6c",
        },
      }}
    >
      <Layout>
        <div className="ViewSinglePost">
          <main>
            <ViewSinglePost post={post as Post} />
            <Interact
              heading="Spread the good news:"
              shareTitle={shareTitle}
              shareSubtitle={post.subtitle}
              shareUrl={shareUrl}
              fillColor={actionFillColor}
            />
          </main>
        </div>
      </Layout>
    </LyketProvider>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  switch (caught.status) {
    case 400: {
      return (
        <SiteError>
          <span>Request is not allowed.</span>
        </SiteError>
      );
    }
    case 404: {
      return (
        <SiteError>
          <span>Could not find post.</span>
        </SiteError>
      );
    }
    case 403: {
      return (
        <SiteError>
          <span>Request is forbidden.</span>
        </SiteError>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary() {
  const { postId } = useParams();

  return (
    <SiteError>
      <span>There was an error loading the post by the id {postId}</span>
    </SiteError>
  );
}
