import styles from "./index.module.css";
import Subtitle from "../../atoms/SubTitle";
import Maintitle from "../../atoms/MainTitle";

type HeadLineProps = {
  main: string;
  sub: string;
};

export default function HeadLine({ main, sub }: HeadLineProps) {
  return (
    <div className={styles.HeadlinePosition}>
      <Maintitle main={main} />
      <Subtitle sub={sub} />
    </div>
  );
}
