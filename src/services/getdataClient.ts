"use client";
const options = {
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
import { useQuery } from "@tanstack/react-query";
export default function DataGet() {
  const { data, isLoading, isError, error } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => await fetch("https://api.github.com/search/repositories?q=language:javascript&sort=stars=desc", options).then((res) => res.json()),
  });
  return { data, isLoading, isError, error };
}
