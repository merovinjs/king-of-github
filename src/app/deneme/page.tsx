"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return data;
    },
  });
}

const Deneme = () => {
  const { data } = usePosts();
  return <div>{JSON.stringify(data)}</div>;
};

export default Deneme;
