"use client";

import Image from "next/image";
import styles from "./index.module.css";
import type { ClientWork } from "@/src/data/ClientWorks";

type Props = {
  work: ClientWork;
  onClose: () => void;
};

export default function Modal({ work, onClose }: Props) {
  return (
    <div className={styles.ModalOverlay} onClick={onClose}>
      <div
        className={styles.ModalPosition}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.CloseButton}
          onClick={onClose}
          aria-label="モーダルを閉じる"
        >
          ×
        </button>
        <ul className={styles.DescriptionList}>
          <li className={styles.EachItem}>
            <Image
              src={work.image}
              alt={work.alt}
              width={work.width}
              height={work.height}
              className={styles.MyFace}
            />
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>使用言語</h4>
            <p className={styles.Detail}>{work.languages.join(" / ")}</p>
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>DB</h4>
            <p className={styles.Detail}>{work.database.join(" / ")}</p>
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>使用ツール</h4>
            <p className={styles.Detail}>{work.tools.join(" / ")}</p>
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>役割</h4>
            <p className={styles.Detail}>{work.role}</p>
          </li>
        </ul>

        <ul className={styles.DescriptionList}>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>アプリについて</h4>
            <p className={styles.Detail}>{work.description}</p>
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>担当業務</h4>
            <ul>
              {work.responsibilities.map((item, index) => (
                <li className={styles.Detail} key={`${work.id}-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.EachItem}>
            <h4 className={styles.Headline}>学び</h4>
            <p className={styles.Detail}>{work.learning}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
