import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import PostList from "~/components/shared/post-list";
import type { loader } from "~/routes/posts/";

const ViewAllEngineeringPosts = () => {
  const data = useLoaderData<typeof loader>();
  const goTo = useNavigate();

  return (
    <>
      <h1>All engineering posts</h1>
      <div className="ViewAllPosts__content">
        {data?.user && (
          <>
            <span>Hello {data.user.username}</span>
            <button onClick={() => goTo("new")}>Add new post</button>
            <Form action="/logout" method="post">
              <button type="submit">Logout</button>
            </Form>
          </>
        )}
      </div>
      <section className="ViewAllPosts__post-list">
        {data.posts.length === 0 && "No posts found."}
        <PostList
          posts={data.posts}
          onSelect={(slug) => goTo(`/posts/${slug}`)}
        />
      </section>
    </>
  );
};

export default ViewAllEngineeringPosts;
