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
import { toPost } from "~/utils";
import { db } from "~/utils/db.server";
import ViewSinglePost from "~/components/pages/content/posts-view-single";
import viewSinglePostStyles from "../components/pages/content/posts-view-single/index.css";
import { getUserId, requireUserId } from "~/utils/session.server";
import SiteError from "~/components/shared/error";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: "Empty post",
      description: "No post found",
    };
  }
  return {
    title: data.post.title,
    description: data.post.subtitle,
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: viewSinglePostStyles }];
};

export const loader = async ({ params, request }: LoaderArgs) => {
  const userId = await getUserId(request);
  const post = await db.postModel.findUnique({
    where: { id: params.postId },
  });

  if (!post) {
    throw new Response("Oops. Could not find post.", {
      status: 404,
    });
  }
  return json({ post, isOwner: userId === post.userId });
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
    where: { id: params.jokeId },
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

  await db.postModel.delete({ where: { id: params.jokeId } });
  return redirect("/posts");
};

export default function PostViewRoute() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main>
        <ViewSinglePost post={toPost(post)} />
      </main>
    </Layout>
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
