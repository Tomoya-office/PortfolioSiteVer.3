import Image from "next/image";
import styles from "./index.module.css";
import { PortfolioWebSite as PortfolioWebSiteType } from "@/src/data/PortfolioWebSite"

type PortfolioWebSiteProps = {
  website: PortfolioWebSiteType;
};

export default function PortfolioWebSiteItem({
  website,
}: PortfolioWebSiteProps) {
  return (
    <Image
      src={website.image}
      alt={website.alt}
      className={styles.WebPortfolioPhoto}
      height={website.height}
      width={website.width}
    />
  );
}
