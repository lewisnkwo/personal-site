import { useActionData } from "@remix-run/react";
import type { action } from "~/routes/posts/new";
import { PostsNewFieldError } from "../../../shared/form/field-error";

const PostsNew = () => {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <h1>Add new post</h1>
      <form method="post">
        <input
          defaultValue={actionData?.fields?.title}
          name="title"
          type="text"
          placeholder="Enter post title..."
          aria-label="Enter post title"
          aria-invalid={Boolean(actionData?.fieldErrors?.title)}
          aria-errormessage={
            actionData?.fieldErrors?.title ? "title-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="title" />
        <input
          defaultValue={actionData?.fields?.subTitle}
          name="subTitle"
          type="text"
          placeholder="Enter subtitle..."
          aria-label="Enter post subtitle"
          aria-invalid={Boolean(actionData?.fieldErrors?.subTitle)}
          aria-errormessage={
            actionData?.fieldErrors?.subTitle ? "subTitle-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="subTitle" />
        <textarea
          defaultValue={actionData?.fields?.body}
          name="body"
          placeholder="I just found out..."
          aria-label="Enter post body"
          aria-invalid={Boolean(actionData?.fieldErrors?.body)}
          aria-errormessage={
            actionData?.fieldErrors?.body ? "body-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="body" />
        <select name="category" defaultValue="coding" aria-label="Post topic">
          <option value="coding">Coding</option>
          <option value="travel">Travel</option>
          <option value="fitness">Fitness</option>
        </select>
        <button type="submit">Add post</button>
      </form>
    </>
  );
};

export default PostsNew;
