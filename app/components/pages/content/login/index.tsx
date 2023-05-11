import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { PostsNewFieldError } from "~/components/shared/form/field-error";
import type { action } from "~/routes/login";

const Login = () => {
  const actionData = useActionData<typeof action>();
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>Login</h1>
      <Form method="post">
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") ?? undefined}
        />
        <fieldset>
          <label>
            <input type="radio" name="loginType" value="login" defaultChecked />
            Login
          </label>
        </fieldset>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          aria-label="Enter username"
          defaultValue={actionData?.fields?.username}
          aria-invalid={Boolean(actionData?.fieldErrors?.username)}
          aria-errormessage={
            actionData?.fieldErrors?.username ? "username-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="username" />
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          aria-label="Enter password"
          defaultValue={actionData?.fields?.password}
          aria-invalid={Boolean(actionData?.fieldErrors?.password)}
          aria-errormessage={
            actionData?.fieldErrors?.password ? "password-error" : undefined
          }
        />
        <PostsNewFieldError actionData={actionData} fieldName="password" />
        <button type="submit">Login</button>
      </Form>
    </>
  );
};

export default Login;
