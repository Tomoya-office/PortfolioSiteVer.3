import styles from "./index.module.css";
import Image from "next/image";

export default function Footer() {
  return (
        <footer className={styles.FooterPosition}>
          <h5 className={styles.FooterName}>IGUSA TOMOYA</h5>
          <Image
            src="/top/FooterBg.jpg"
            alt="Footer写真"
            className={styles.FooterPhoto}
            width={1440}
            height={320}
          ></Image>
        </footer>
  );
}
