import Image from "next/image";
import styles from "./index.module.css";
// import { PortfolioWebSite as PortfolioType } from "@/src/data/PortfolioWebSite";

type PortfolioProps = {
  website: {
    id: number;
    image: string;
    alt: string;
    width: number;
    height: number;
  };
  onClick: () => void;
};

export default function PortfolioItem({ website, onClick }: PortfolioProps) {
  return (
    <button
      className={styles.PortfolioItem}
      onClick={onClick}
      aria-label={website.alt}
    >
      <Image
        src={website.image}
        alt={website.alt}
        className={styles.WebPortfolioPhoto}
        height={website.height}
        width={website.width}
      />
    </button>
  );
}
