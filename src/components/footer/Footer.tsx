import Link from "next/link";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <span>
        Created by <Link href="https://github.com/oldbeedev">Merovingian</Link>
      </span>
    </div>
  );
};

export default Footer;
