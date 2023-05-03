import { useNavigate } from "@remix-run/react";
import type { Post } from "~/types";

interface Props {
  post: Post;
}

const ViewSinglePost = ({ post }: Props) => {
  const goTo = useNavigate();
  return (
    <>
      <h2>{post.title}</h2>
      <h4>{post.subTitle}</h4>
      <p>{post.body}</p>
      <p>{post.category}</p>
      <div className="ViewSinglePost__actions">
        <button onClick={() => goTo("/")}>Back to homepage</button>
      </div>
    </>
  );
};

export default ViewSinglePost;
