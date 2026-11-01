"use client";

import Image from "next/image";
import styles from "./index.module.css";
import type { ClientWork } from "@/src/data/ClientWorks";
import ModalButton from "../../atoms/ModalButton";
import ModalInfoItem from "../../organisms/ModalInfoItem";
import ModalDetailItem from "../../organisms/ModalDetailItem";

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
        <ModalButton onClose={onClose} />
        <ul className={styles.LeftDescriptionList}>
          <li className={styles.EachItem}>
            <Image
              src={work.image}
              alt={work.alt}
              width={work.width}
              height={work.height}
              className={styles.MyFace}
            />
          </li>
          <ModalInfoItem title="使用言語" detail={work.languages.join(" / ")} />
          <ModalInfoItem title="DB" detail={work.database.join(" / ")} />
          <ModalInfoItem title="使用ツール" detail={work.tools.join(" / ")} />
          <ModalInfoItem title="役割" detail={work.role} />
        </ul>

        <ul className={styles.RightDescriptionList}>
          <ModalDetailItem title="アプリについて" details={work.description} />
          <ModalDetailItem title="担当業務" details={work.responsibilities} />
          <ModalDetailItem title="学び" details={work.learning} />
        </ul>
      </div>
    </div>
  );
}
