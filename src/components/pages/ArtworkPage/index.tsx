"use client";

import Image from "next/image";
import styles from "./index.module.css";
import clsx from "clsx";
import { Noto_Sans_JP, Dangrek, Galada } from "next/font/google";
import NavMenu, { type NavMenuData } from "../../organisms/NavMenu";
import ScrollDown from "../../atoms/ScrollDown";

const NavMenuData: NavMenuData[] = [
  { label: "Top", href: "#top" },
  { label: "Home", href: "/#top" },
  { label: "Information", href: "#Information" },
  { label: "Photos", href: "#Photos" },
  { label: "Contact", href: "#Contact" },
];

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ArtworkPage() {
  return (
    <>
      <div className={styles.ArtWorkBody}>
        <header className={styles.Header}>
          <NavMenu menus={NavMenuData} />
          <h1 className={clsx(styles.Meaning, galada.className)}>
            Original
            <br />
            Web Site
          </h1>
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
          <ScrollDown />
        </header>

        <section id="Information" className={styles.InformationSection}>
          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Consept</h2>
            <p className={styles.Description}>
              飛び切り明るくポップなデザインのECサイト
            </p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Target</h2>
            <p className={styles.Description}>若い女性20～30代</p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Design</h2>
            <p className={styles.Description}>
              ターゲットが若い女性なので自分の持てる手札全てを使い
              <br />
              明るく可愛らしいサイトを作りました。
              <br />
              サイト全体の統一感を持たせることもそうですが、
              <br />
              LPとのデザインも意識して作りました。
            </p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Position</h2>
            <p className={styles.Description}>PL・PG・デザイン</p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Episode</h2>
            <p className={styles.Description}>
              前回のLP制作に続き私が所属している会社で融資を募って
              <br />
              大人数で制作するサイト制作でした。
              <br />
              普段配属先でできないことを行うのが本プロジェクトで
              <br />
              PL経験のない私も含めて慣れないことだらけでした。
              <br />
              このプロジェクトはLP制作に続き第二弾「架空のお店のECサイト制作」です。
              <br />
              なので
            </p>
          </div>
        </section>

          <ul className={styles.IconPosition}>
            <li className={styles.IconList}>
              <Image
                src="/ArtWorksPhotos/Icons/LoginIcon.svg"
                alt="Loginアイコン"
                className={styles.Icons}
                width={85}
                height={100}
              />
            </li>

            <li className={styles.IconList}>
              <Image
                src="/ArtWorksPhotos/Icons/CartIcon.svg"
                alt="Cartアイコン"
                className={styles.Icons}
                width={85}
                height={100}
              />
            </li>

            <li className={styles.IconList}>
              <Image
                src="/ArtWorksPhotos/Icons/HomeIcon.svg"
                alt="Homeアイコン"
                className={styles.Icons}
                width={85}
                height={100}
              />
            </li>

            <li className={styles.IconList}>
              <Image
                src="/ArtWorksPhotos/Icons/RegistrationIcon.svg"
                alt="Registrationアイコン"
                className={styles.Icons}
                width={85}
                height={100}
              />
            </li>

            <li className={styles.IconList}>
              <Image
                src="/ArtWorksPhotos/Icons/managementIcon.svg"
                alt="managementアイコン"
                className={styles.IconsPhoto}
                width={85}
                height={100}
              />
            </li>
          </ul>

        <section id="Photos" className={styles.PhotosSection}>
          <Image
            src="/ArtWorksPhotos/FullPage/ECsiteFull.svg"
            alt="ECサイトのHOME写真"
            className={styles.IconsPhoto}
            width={1440}
            height={2500}
          />
        </section>
      </div>
    </>
  );
}
