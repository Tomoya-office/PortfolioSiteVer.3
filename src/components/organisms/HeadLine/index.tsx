import styles from "./index.module.css";
import Subtitle from "../../atoms/SubTitle";
import Maintitle from "../../atoms/MainTitle";

type HeadLineProps = {
  sub: string;
  main: string;
};

export default function HeadLine({ sub,main }: HeadLineProps) {
  return (
    <div className={styles.HeadlinePosition}>
      <Subtitle sub={sub} />
      <Maintitle main={main} />
    </div>
  );
}
