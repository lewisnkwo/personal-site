export const validatePostString = (
  name: string,
  title: "title" | "subtitle" | "slug" | "readTime"
): string | undefined => {
  if (name.length < 3) {
    return `The ${title} is too short.`;
  }
};

export const validatePostBody = (body: string): string | undefined => {
  if (body !== "" && body.length < 10) {
    return "The body is too short.";
  }
};
