import Image from "next/image";
import styles from "./styles.module.css";
import { Croissant_One } from "next/font/google";
const croissant = Croissant_One({
  subsets: ["latin-ext"],
  weight: "400",
});
const BestStars = ({ first15, title }: any) => {
  return (
    <div className={styles.container}>
      <p className={`${croissant.className} ${styles.containerp}`}>{title}</p>
      <li className={styles.li}>
        <ul>ProjectName</ul>
        <ul></ul>
        <ul className={styles.ulstars}>
          Stars <span className={styles.spanstarheader}>★</span>{" "}
        </ul>
        <ul>Description</ul>
      </li>
      <div className={styles.starscontainer}>
        {first15.map((stars: any, index: any) => (
          <div className={styles.stars} key={index}>
            <p className={styles.starsName}>{stars.name}</p>
            <Image className={styles.image} src={stars.owner.avatar_url} alt="stars" width={75} height={75} />
            <p>
              {stars.stargazers_count}
              <span className={styles.spanstar}>★</span>
            </p>
            <p>{stars.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestStars;
