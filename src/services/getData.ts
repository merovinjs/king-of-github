export async function getData() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc", options);
  return jsstars.json();
}
