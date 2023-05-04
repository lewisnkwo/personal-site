import { useNavigate } from "@remix-run/react";

const ViewAllPosts = () => {
  const goTo = useNavigate();
  return (
    <>
      <h1>All posts</h1>
      <button onClick={() => goTo("/posts/new")}>Add new post</button>
    </>
  );
};

export default ViewAllPosts;
