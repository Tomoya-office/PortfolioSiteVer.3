"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import type { ArtworkCategory } from "@/src/data/ArtworkData";
import Footer from "../Footer";

type Props = {
  categories: ArtworkCategory[];
};

export default function PhotoSwitchingButton({ categories }: Props) {
  // 最初に選択されるアイコン
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id ?? "",
  );

  // 選択中のアイコンに対応するデータ
  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId,
  );

  return (
    <>
      {/* アイコンボタン */}
      <ul className={styles.IconPosition}>
        {categories.map((category) => (
          <li key={category.id} className={styles.IconList}>
            <button
              type="button"
              onClick={() => setSelectedCategoryId(category.id)}
              className={
                selectedCategoryId === category.id
                  ? styles.SelectedButton
                  : styles.IconButton
              }
              aria-label={category.label}
              aria-pressed={selectedCategoryId === category.id}
            >
              <Image
                src={category.icon}
                alt={category.alt}
                className={styles.Icons}
                width={85}
                height={100}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* 選択したアイコンに対応する写真 */}
      <section className={styles.PhotoSection}>
        {selectedCategory?.photos.map((photo, index) => (
          <Image
            key={`${selectedCategory.id}-${index}`}
            src={photo.src}
            alt={photo.alt}
            className={styles.Photo}
            width={photo.width}
            height={photo.height}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
