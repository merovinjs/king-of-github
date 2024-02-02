import styles from "./styles.module.css";
const BestStars = ({ first15, title }: any) => {
  return (
    <div className={styles.container}>
      <p className={styles.containerp}>{title}</p>

      <div className={styles.starscontainer}>
        {first15.map((stars: any, index: any) => (
          <p key={index}>{stars.name}</p>
        ))}
      </div>
    </div>
  );
};

export default BestStars;
