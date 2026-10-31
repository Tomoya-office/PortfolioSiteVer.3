import type { PortfolioWebSite } from "@/src/data/PortfolioWebSite";
import type { ClientWorkListItem } from "@/src/data/ClientWorkListData";

import PortfolioItem from "../../atoms/PortfolioItem";
import styles from "./index.module.css";

type PortfolioItemData = {
  id: number;
  image: string;
  alt: string;
  height: number;
  width: number;
};

type Props = {
  websites: PortfolioItemData[];
  onItemClick: (website: PortfolioItemData) => void;
};

export default function PortfolioList({ websites, onItemClick }: Props) {
  return (
    <div className={styles.WebPortfolioPosition}>
      {websites.map((website) => (
        <PortfolioItem
          key={website.id}
          website={website}
          onClick={() => onItemClick(website)}
        />
      ))}
    </div>
  );
}
