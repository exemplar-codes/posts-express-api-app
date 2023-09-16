function getDevelopmentAPIUrlPrefix() {
  const domain = window.location.origin;
  const cleanedDomain = domain
    .split(":")
    .slice(0, -1)
    .join(":");
  const port = process.env.PORT || 8080;
  const url = `${cleanedDomain}:${port}`;

  return url;
}

export const postsURL =
  process.env.NODE_ENV === "development"
    ? `${getDevelopmentAPIUrlPrefix()}/posts`
    : "/posts";
