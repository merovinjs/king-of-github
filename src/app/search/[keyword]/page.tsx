import React from "react";
import Image from "next/image";
const Page = async ({ params }: any) => {
  const keyword = params.keyword;
  const options = {
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
    },
  };
  const res = await fetch(`https://api.github.com/search/repositories?q=language:${keyword}&sort=stars=desc`, options);
  const data = await res.json();
  let items = data.items;

  return (
    <div>
      <h2>Arama Sonuçlarınız...</h2>
      <div>
        {items.map((lang: any) => (
          <div key={lang.id}>
            <Image width={175} height={250} unoptimized alt={lang.name} src={lang.owner.avatar_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
