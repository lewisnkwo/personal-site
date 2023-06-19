import type { loader } from "~/routes/posts.$postSlug";
import type { Post } from "~/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import Markdown from "~/components/shared/markdown";
import { ClapButton } from "@lyket/react";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
}

const ViewSinglePost = ({ post }: Props) => {
  const data = useLoaderData<typeof loader>();
  const goTo = useNavigate();
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      {isComponentMounted && ( // fixes CSS mismatch issue on hydration
        <div className="ViewSinglePost__clap">
          <ClapButton id={post.slug ?? post.id} namespace="post" />
        </div>
      )}
      <span className="ViewSinglePost__history">
        Last updated: {post.updatedAt}
      </span>
      <hr />
      <Markdown
        content={
          data.markdown ??
          "Could not load post content. Please try again later."
        }
      />
      <span className="ViewSinglePost__category">
        <FontAwesomeIcon icon="tag" /> {post.category}
      </span>
      <span className="ViewSinglePost__history">
        Created on: {post.createdAt}
      </span>
      <div className="ViewSinglePost__actions">
        {data.isOwner && (
          <Form method="post">
            <button name="action" type="submit" value="delete">
              Delete
            </button>
          </Form>
        )}
        <button onClick={() => goTo("/")}>Back to homepage</button>
      </div>
    </>
  );
};

export default ViewSinglePost;
