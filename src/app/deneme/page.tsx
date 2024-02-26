"use client";

import DataGet from "@/services/getdataClient";

export default function Deneme() {
  const { data, isLoading, isError, error } = DataGet();

  return <div>{JSON.stringify(data)}</div>;
}
//"https://jsonplaceholder.typicode.com/todos/1"
