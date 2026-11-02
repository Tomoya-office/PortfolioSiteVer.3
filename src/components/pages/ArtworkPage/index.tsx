"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { Noto_Sans_JP, Dangrek, Galada } from "next/font/google";
import NavMenu, { type NavMenuData } from "../../organisms/NavMenu";

const NavMenuData: NavMenuData[] = [
  { label: "Top", href: "#top" },
  { label: "Home", href: "/#top" },
  { label: "Information", href: "#Information" },
  { label: "Illustration", href: "#Illustration" },
  { label: "Contact", href: "#Contact" },
];

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dangrek = Dangrek({
  subsets: ["latin"],
  weight: ["400"],
});

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ArtworkPage() {
  return (
    <>
      <header className={styles.Header}>
        <NavMenu menus={NavMenuData} />
        <Image
          src="/ArtWorksPhotos/ECsiteTop.svg"
          alt="ECサイトのトップページ"
          className={styles.HeaderPhoto}
          width={1240}
          height={640}
        />
        <div className={styles.CheckTheArtworkPosition}>
          <Image
            src="/ArtWorksPhotos/CheckTheArtwork.svg"
            alt="CheckTheArtwork"
            className={styles.CheckTheArtworkAround}
            width={250}
            height={250}
          />
        </div>
      </header>
    </>
  );
}
