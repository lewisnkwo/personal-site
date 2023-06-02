import Markdown from "markdown-to-jsx";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import type { loader } from "~/routes/posts.$postId";
import type { Post } from "~/types";

interface Props {
  post: Post;
}

const ViewSinglePost = ({ post }: Props) => {
  const data = useLoaderData<typeof loader>();
  const goTo = useNavigate();

  return (
    <>
      <h2>{post.title}</h2>
      <h4>{post.subtitle}</h4>
      <Markdown>{data.markdown}</Markdown>
      <p>{post.category}</p>
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
