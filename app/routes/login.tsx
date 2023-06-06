import type { ActionArgs } from "@remix-run/node";
import { badRequest } from "~/utils/request.server";
import { createUserSession, login } from "~/utils/session.server";
import Layout from "~/components/pages/layout";
import Login from "~/components/pages/content/login";

const validateUsername = (username: string) => {
  if (username.length < 3) {
    return "The username is too short.";
  }
};

const validatePassword = (password: string) => {
  if (password.length < 6) {
    return "The password is too short.";
  }
};

const validateUrl = (url: string) => {
  const urls = ["/posts", "/"];
  if (urls.includes(url)) {
    return url;
  }
  return "/posts";
};

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();

  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = validateUrl(
    (form.get("redirectTo") as string) || "/posts"
  );

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Login form not submitted correctly.",
    });
  }

  const fields = {
    username,
    password,
  };

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }

  const user = await login({ username, password });

  if (!user) {
    return badRequest({
      fieldErrors: null,
      fields,
      formError: "Username or password is incorrect",
    });
  }
  return createUserSession(user.id, redirectTo);
};

export default function LoginRoute() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
