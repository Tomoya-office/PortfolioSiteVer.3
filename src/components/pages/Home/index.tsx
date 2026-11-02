"use client";

import Image from "next/image";
import styles from "./index.module.css";
import clsx from "clsx";
import { Noto_Sans_JP, Dangrek, Mochiy_Pop_One } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ヘッダー ポートフォリオの切り抜き写真
import PortfolioPhotosList from "../../atoms/PortfolioPhotos";
// タイトル
import HeadLine from "../../organisms/HeadLine";
// 自分のスキル
import SkillList from "../../organisms/SkillList";
// プロフィール本
import ProfileBook from "../../organisms/ProfileBook";
// WEBサイトのポートフォリオ
import PortfolioList from "../../organisms/PortfolioList";

// データ
import PortfolioPhotos1 from "@/src/data/PortfolioPhotos1";
import PortfolioPhotos2 from "@/src/data/PortfolioPhotos2";
import skills from "@/src/data/SkillsData";

import PortfolioWebSite from "@/src/data/PortfolioWebSite";
import ClientWorkListData from "@/src/data/ClientWorkListData";
import ClientWorks, { type ClientWork } from "@/src/data/ClientWorks";

import Modal from "../Modal";
import NavMenu , { type NavMenuData } from "../../organisms/NavMenu";

const NavMenuData: NavMenuData[] = [
  { label: "Top", href: "#top" },
  { label: "All Skills", href: "#Skills" },
  { label: "Profile", href: "#Profile" },
  { label: "My Works", href: "#MyWorks" },
  { label: "Client", href: "#Client" },
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

export default function Home() {
  const router = useRouter();
  const [selectedWork, setSelectedWork] = useState<ClientWork | null>(null);
  return (
    <div className={styles.page}>
      <header className={styles.Header}>
        <NavMenu menus={NavMenuData} />
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
        <section id="Skills" className={styles.SkilsSection}>
          <HeadLine main="全てのスキル" sub="All Skills" />
          <div className={styles.SkillsExplanation}>
            {skills.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </section>

        <section id="Profile" className={styles.ProfileSection}>
          <HeadLine main="私についてもっと" sub="Profile" />
          <ProfileBook />
        </section>

        <section id="MyWorks" className={styles.WebPortfolioSection}>
          <HeadLine main="これまでの作品" sub="MyWorks" />
          <PortfolioList
            websites={PortfolioWebSite}
            onItemClick={(website) => {
              router.push(`/works/${website.id}`);
            }}
          />
        </section>

        <section id="Client" className={styles.ClientWorkSection}>
          <HeadLine main="派遣先での業務" sub="Client" />

          <PortfolioList
            websites={ClientWorkListData}
            onItemClick={(website) => {
              const work = ClientWorks.find((item) => item.id === website.id);
              if (work) {
                setSelectedWork(work);
              }
            }}
          />

          {selectedWork && (
            <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
          )}
        </section>

        <footer></footer>
      </main>
    </div>
  );
}
