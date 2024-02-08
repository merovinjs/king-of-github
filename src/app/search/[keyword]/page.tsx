import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

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
      <div className={styles.baseContainer}>
        {items.map((lang: any) => (
          <div className={styles.container} key={lang.id}>
            <div className={styles.starsContainer}>
              <Image width={175} height={200} unoptimized alt={lang.name} src={lang.owner.avatar_url} />
              <p>{lang.description.length > 200 ? lang.description.slice(0, 200) + "..." : lang.description}</p>
              <p>{lang.topics[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
