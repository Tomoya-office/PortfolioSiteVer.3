"use client";

import Image from "next/image";
import styles from "./index.module.css";
import clsx from "clsx";
import { Galada } from "next/font/google";
import NavMenu, { type NavMenuData } from "../../organisms/NavMenu";
import ScrollDown from "../../atoms/ScrollDown";

import PhotoSwitchingButton from "../../organisms/PhotoSwitchingButton";
import ArtworkData from "@/src/data/ArtworkData";
// import type { Artwork } from "@/src/data/ArtworkData";

const NavMenuData: NavMenuData[] = [
  { label: "Top", href: "#top" },
  { label: "Home", href: "/#top" },
  { label: "Information", href: "#Information" },
  { label: "Photos", href: "#Photos" },
];

type Props = {
  id: number;
};

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ArtworkPage({ id }: Props) {
  const artwork = ArtworkData.find((item) => item.id === id);
  if (!artwork) {
    return <p>作品が見つかりません。</p>;
  }
  return (
    <div className={styles.ArtWorkBodyColor}>
      <div className={styles.ArtWorkBody}>
        <header className={styles.Header}>
          <NavMenu menus={NavMenuData} />
          <h1 className={clsx(styles.Meaning, galada.className)}>
            Original
            <br />
            Web Site
          </h1>
          <Image
            src={artwork.mainImage}
            alt={artwork.mainImageAlt}
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
            <div className={styles.Description}>
              {artwork.concept.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Target</h2>
            <p className={styles.Description}>
              {artwork.target.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Design</h2>
            <div className={styles.Description}>
              {artwork.design.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Position</h2>
            <p className={styles.Description}>{artwork.position}</p>
          </div>

          <div className={styles.InformationContent}>
            <h2 className={styles.Headline}>Episode</h2>
            <div className={styles.Description}>
              {artwork.episode.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </section>
        <div id="Photos"></div>
        <PhotoSwitchingButton categories={artwork.categories} />
      </div>
    </div>
  );
}
