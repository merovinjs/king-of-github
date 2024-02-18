import { useQuery } from "@tanstack/react-query";

const options = {
  headers: {
    Authorization: `token ${process.env.GITHUB_KEY}`,
  },
};
export async function getData() {
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc", options);
  return jsstars.json();
}
export async function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc", options);
      return response.json();
    },
  });
}

export async function getDatats() {
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:typescript&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatapy() {
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:python&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatacss() {
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:css&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatago() {
  const jsstars = await fetch("https://api.github.com/search/repositories?q=language:go&sort=stars=desc", options);
  return jsstars.json();
}
export async function getDatac() {
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
  const jsstars = await fetch(`https://api.github.com/search/repositories?q=language:${query}&sort=stars=desc`, options);
  return jsstars.json();
}
