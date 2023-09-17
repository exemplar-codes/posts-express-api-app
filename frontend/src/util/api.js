function getDevelopmentAPIUrlPrefix() {
  const domain = window.location.origin;
  const cleanedDomain = domain.split(":").slice(0, -1).join(":");
  const port = import.meta.env.PORT || 8080;
  const url = `${cleanedDomain}:${port}`;

  return url;
}

export const postsURL = import.meta.env.DEV
  ? `${getDevelopmentAPIUrlPrefix()}/posts`
  : "/posts";
