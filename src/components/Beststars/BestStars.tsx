import styles from "./styles.module.css";
const BestStars = ({ first15 }: any) => {
  return (
    <div className={styles.container}>
      {first15.map((stars: any, index: any) => {
        return <div key={index}>{stars.name}</div>;
      })}
    </div>
  );
};

export default BestStars;
