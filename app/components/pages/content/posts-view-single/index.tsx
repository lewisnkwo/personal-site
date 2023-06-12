import type { loader } from "~/routes/posts.$postSlug";
import type { Post } from "~/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import Markdown from "~/components/shared/markdown";

interface Props {
  post: Post;
}

const ViewSinglePost = ({ post }: Props) => {
  const data = useLoaderData<typeof loader>();
  const goTo = useNavigate();

  return (
    <div className="ViewSinglePost">
      <main>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
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
      </main>
    </div>
  );
};

export default ViewSinglePost;
