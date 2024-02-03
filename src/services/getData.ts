export async function getData() {
  const fetchJsstars = await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc&per_page=15");
  return fetchJsstars.json();
}
