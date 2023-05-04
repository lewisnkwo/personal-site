export const validatePostTitle = (
  name: string,
  title: "title" | "subtitle"
): string | undefined => {
  if (name.length < 3) {
    return `The ${title} is too short.`;
  }
};

export const validatePostBody = (body: string): string | undefined => {
  if (body.length < 10) {
    return "The body is too short.";
  }
};
