import Image from "next/image";
import styles from "./styles.module.css";
const BestStartImage = ({ first15 }: any) => {
  return (
    <div className={styles.imagecontainer}>
      {first15.map((image: any, index: any) => (
        <Image key={index} className={styles.image} src={image.owner.avatar_url} alt="profile" width={70} height={70} />
      ))}
    </div>
  );
};

export default BestStartImage;
