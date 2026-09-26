import Image from "next/image";
import styles from "./index.module.css";
import type { PortfolioPhoto } from "@/src/data/PortfolioPhotos1";

type PortfolioPhotosProps = {
  photo: PortfolioPhoto;
};

export default function PortfolioPhotos({
  photo,
}: PortfolioPhotosProps) {
  return (
    <Image
      src={photo.image}
      alt={photo.alt}
      className={styles.ScrollPhoto}
      width={100}
      height={100}
    />
  );
}