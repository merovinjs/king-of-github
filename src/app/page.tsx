import BestStars from "@/components/Beststars/BestStars";
import styles from "./page.module.css";
import { Croissant_One } from "next/font/google";
import { Metadata } from "next";
import BestStartImage from "@/components/BestStarsImage/BestStartImage";
import { getData, getDatac, getDatacpp, getDatacss, getDatago, getDatapy, getDatats } from "@/services/getData";
import NavigationMenuDemo from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SearchLang from "@/components/SearchLanguage/SearchLang";

const croissant = Croissant_One({
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Home() {
  let datac = getDatac();
  let datajs = getData();
  let datajava = getDatacpp();
  let datats = getDatats();
  let datapy = getDatapy();
  let datacss = getDatacss();
  let datago = getDatago();
  let dataphp = getDatacpp();

  const allData = await Promise.all([datac, datajs, datajava, datats, datapy, datacss, datago, dataphp]);
  const first15Data = allData.map((data) => data.items.slice(0, 15));
  const firs15DataForimages = first15Data.flat();

  let bg = ["#FF204756", "#836A21", "#6F2539", "#25482D", "#562800", "#577538", "#56468B", "#181917"];
  let title = ["C", "javascript", "Java", "Typescript", "Python", "Css", "Go", "Php"];

  const bgmap = bg.map((item, index) => item);
  const titles = title.map((item, index) => item);
  const reversedBgmap = bgmap.slice().reverse();
  return (
    <main className={styles.main}>
      <NavigationMenuDemo />
      <section className={styles.sectionContainer}>
        <section className={styles.headerContainer}>
          <section className={styles.kingimages}>
            <BestStartImage first15={firs15DataForimages} />
          </section>

          <h1 className={`${croissant.className} ${styles.h1}`}>King&apos;s of Github</h1>
        </section>

        <SearchLang />

        <section className={styles.bestStarsContainer}>
          {first15Data.map((data, index) => (
            <BestStars key={index} first15={data} title={titles[index]} bg={bgmap[index]} bg2={reversedBgmap[index]} />
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
}
