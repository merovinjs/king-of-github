import BestStars from "@/components/Beststars/BestStars";
import styles from "./page.module.css";
import { Croissant_One } from "next/font/google";
import { Metadata } from "next";
import Image from "next/image";
import BestStartImage from "@/components/BestStarsImage/BestStartImage";
import { getData } from "@/services/getData";

const croissant = Croissant_One({
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Home() {
  const data = await getData();
  let first15 = data.items;

  return (
    <main className={styles.main}>
      <section className={styles.headerContainer}>
        <div className={styles.image}>
          <Image src={"/homePageBg.jpg"} alt="homePageBg" sizes="(max-width:1200px) 100vw,700px" fill />
        </div>

        <h1 className={`${croissant.className} ${styles.h1}`}>King&apos;s of Github</h1>
      </section>

      <section>
        <BestStartImage first15={first15} />
      </section>
      <section className={styles.bestStarsContainer}>
        <BestStars first15={first15} title="javascript" />
      </section>
      <h1>footer</h1>
    </main>
  );
}
