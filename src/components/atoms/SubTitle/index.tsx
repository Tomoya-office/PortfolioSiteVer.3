import styles from "./index.module.css";
import clsx from "clsx";
import { Galada } from "next/font/google";

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
});

type SubTitleProps = {
  sub: string;
};

export default function Subtitle({ sub }: SubTitleProps) {
  return (
    <>
      <h3 className={clsx(galada.className, styles.HeadlineEN)}>{sub}</h3>
    </>
  );
}
