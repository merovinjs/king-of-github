import Image from "next/image";
import styles from "./styles.module.css";
import { Croissant_One } from "next/font/google";
import Link from "next/link";
const croissant = Croissant_One({
  subsets: ["latin-ext"],
  weight: "400",
});
const BestStars = ({ first15, title, bg, bg2 }: any) => {
  return (
    <div style={{ backgroundColor: bg2 }} className={styles.container}>
      <p className={`${croissant.className} ${styles.containerp}`}>{title}</p>
      <li className={styles.li}>
        <ul>ProjectName</ul>
        <ul></ul>
        <ul className={styles.ulstars}>
          Stars <span className={styles.spanstarheader}>★</span>{" "}
        </ul>
        <ul>Description</ul>
      </li>
      <div style={{ backgroundColor: bg }} className={styles.starscontainer}>
        {first15 &&
          first15.map((stars: any, index: any) => (
            <div className={styles.stars} key={index}>
              <Link href={stars.owner.html_url} className={styles.starslink} target="_blank">
                <p className={styles.starsName}>{stars.name}</p>
              </Link>
              <div>
                <Image className={styles.image} src={stars.owner.avatar_url} alt="stars" width={75} height={75} />
              </div>
              <p>
                {stars.stargazers_count}
                <span className={styles.spanstar}>★</span>
              </p>
              <p>{stars.description.length > 50 ? stars.description.slice(0, 55) + "..." : stars.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestStars;
