"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./styles.module.css";

const SearchLang = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const searchFunc = (e: any) => {
    if (e.key === "Enter" && keyword.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const searchFuncIcon = () => {
    if (keyword.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div>
      <input value={keyword} onKeyDown={searchFunc} onChange={(e) => setKeyword(e.target.value)} type="text" id="text" placeholder="language   ! ! !" />
      <button className={styles.button} onChange={(e: any) => setKeyword(e.target.value)} onClick={searchFuncIcon}>
        Search
      </button>
    </div>
  );
};

export default SearchLang;
