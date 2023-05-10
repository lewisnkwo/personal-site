import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import type { loader } from "~/routes/posts/";

const ViewAllPosts = () => {
  const data = useLoaderData<typeof loader>();
  const goTo = useNavigate();

  return (
    <>
      <h1>All posts</h1>
      {data?.user ? (
        <div className="ViewAllPosts__content">
          <span>{`Hello ${data.user.username}`}</span>
          <button onClick={() => goTo("/posts/new")}>Add new post</button>
          <form action="/logout" method="post">
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default ViewAllPosts;
