import { Form, useActionData } from "@remix-run/react";
import type { action } from "~/routes/posts/new";
import { PostsNewFieldError } from "../../../shared/form/field-error";

const PostsNew = () => {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <h1>Add new post</h1>
      <Form method="post">
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
          defaultValue={actionData?.fields?.subtitle}
          name="subtitle"
          type="text"
          placeholder="Enter subtitle..."
          aria-label="Enter post subtitle"
          aria-invalid={Boolean(actionData?.fieldErrors?.subtitle)}
          aria-errormessage={
            actionData?.fieldErrors?.subtitle ? "subtitle-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="subtitle" />
        <input
          defaultValue={actionData?.fields?.slug}
          name="slug"
          type="text"
          placeholder="Enter slug..."
          aria-label="Enter post slug"
          aria-invalid={Boolean(actionData?.fieldErrors?.slug)}
          aria-errormessage={
            actionData?.fieldErrors?.slug ? "slug-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="slug" />
        <input
          defaultValue={actionData?.fields?.readTime}
          name="readTime"
          type="text"
          placeholder="Enter estimated reading time..."
          aria-label="Enter reading time"
          aria-invalid={Boolean(actionData?.fieldErrors?.readTime)}
          aria-errormessage={
            actionData?.fieldErrors?.slug ? "readTime-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="readTime" />
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
        <select
          name="category"
          defaultValue="Engineering"
          aria-label="Post topic"
        >
          <option value="Engineering">Engineering</option>
          <option value="Travel">Travel</option>
        </select>
        <button type="submit">Create post</button>
      </Form>
    </>
  );
};

export default PostsNew;
