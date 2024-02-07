export async function getData() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc", options);
  return jsstars.json();
}

export async function getDatats() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:typescript&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatapy() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:python&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatacss() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:css&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatago() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:go&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatac() {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:c&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatacpp() {
  let lang = "php";
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars=desc`, options);
  return jsstars.json();
}
export async function getDatajava() {
  let lang = "java";
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars=desc`, options);
  return jsstars.json();
}
export async function getDataSearch(query: string) {
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const jsstars = await fetch(`https://api.github.com/search/repositories?q=language:${query}&sort=stars=desc`, options);
  return jsstars.json();
}
