"use client";

import Image from "next/image";
import styles from "./index.module.css";
import clsx from "clsx";
import { Noto_Sans_JP, Dangrek, Mochiy_Pop_One } from "next/font/google";

import SkillList from "../../organisms/SkillList";
import skills from "@/src/data/SkillsData";
// import type { Skill } from "@/src/data/SkillsData";

import PortfolioPhotosList from "../../atoms/PortfolioPhotos";
import PortfolioPhotos1 from "@/src/data/PortfolioPhotos1";
import PortfolioPhotos2 from "@/src/data/PortfolioPhotos2";
import HeadLine from "../../organisms/HeadLine";
import ProfileBook from "../../organisms/ProfileBook";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dangrek = Dangrek({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {

  return (
    <div className={styles.page}>
      <header className={styles.Header}>
        <nav className={styles.Navigation}>
          <ul className={styles.UnorderedList}>
            <li>Top</li>
            <li>All Skills</li>
            <li>Profile</li>
            <li>My Works</li>
            <li>Client</li>
            <li>Illustration</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className={styles.AllScrollPhotos}>
          <div className={clsx(styles.ScrollPhotos, styles.FirstPhotos)}>
            {PortfolioPhotos1.map((photo) => (
              <PortfolioPhotosList key={photo.id} photo={photo} />
            ))}
          </div>

          <div className={clsx(styles.ScrollPhotos, styles.SecondPhotos)}>
            {PortfolioPhotos2.map((photo) => (
              <PortfolioPhotosList key={photo.id} photo={photo} />
            ))}
          </div>
        </div>

        <Image
          src="/top/my_face.png"
          alt="トップ画像"
          className={styles.MyFace}
          width={2400}
          height={572}
        ></Image>

        <h1 className={clsx(styles.TopName, dangrek.className)}>
          IGUSA TOMOYA
        </h1>
      </header>

      <main className={styles.main}>
        <section className={styles.SkilsSection}>
          <HeadLine main="全てのスキル" sub="All Skills" />
          <div className={styles.SkillsExplanation}>
            {skills.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </section>

        <section className={styles.ProfileSection}>
          <HeadLine main="私についてもっと" sub="Profile" />
          <ProfileBook />
        </section>

        <footer></footer>
      </main>
    </div>
  );
}
