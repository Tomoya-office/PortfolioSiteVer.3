import styles from "./index.module.css";
import clsx from "clsx";

import { Mochiy_Pop_One } from "next/font/google";

const mochiy_pop_one = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: ["400"],
});

type MainTitleProps = {
  main: string;
};

export default function Maintitle({ main }: MainTitleProps) {
  return (
    <>
      <h2 className={clsx(mochiy_pop_one.className, styles.Headline)}>
        {main}
      </h2>
    </>
  );
}
