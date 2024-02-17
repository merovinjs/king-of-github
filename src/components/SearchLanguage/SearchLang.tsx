"use client";
interface Option {
  label: string;
  value: string;
}
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./styles.module.css";

const SearchLang = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const searchFunc = (e: any) => {
    if (e.key === "Enter" && keyword?.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const searchFuncIcon = () => {
    if (keyword?.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const options: Option[] = [
    { label: "Ada", value: "ada" },
    { label: "Assembly language", value: "assembly" },
    { label: "kotlin", value: "kotlin" },
  ];
  return (
    <>
      <div className={styles.container}>
        <select className={styles.selectContainer} value={keyword} onKeyDown={searchFunc} onChange={(e) => setKeyword(e.target.value)} id="text">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className={styles.button} onChange={(e: any) => setKeyword(e.target.value)} onClick={searchFuncIcon}>
          Search
        </button>
      </div>
      <p>{keyword}</p>
    </>
  );
};

export default SearchLang;
