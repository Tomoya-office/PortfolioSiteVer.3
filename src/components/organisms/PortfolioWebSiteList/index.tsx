import type {
  PortfolioWebSite as PortfolioWebSiteType,
} from "@/src/data/PortfolioWebSite";
import PortfolioWebSiteItem from "../../atoms/PortfolioWebSiteItem";
import styles from "./index.module.css";

type Props = {
  websites: PortfolioWebSiteType[];
};

export default function PortfolioWebSiteList({
  websites,
}: Props) {
  return (
    <div className={styles.WebPortfolioPosition}>
      {websites.map((website) => (
        <PortfolioWebSiteItem
          key={website.id}
          website={website}
        />
      ))}
    </div>
  );
}