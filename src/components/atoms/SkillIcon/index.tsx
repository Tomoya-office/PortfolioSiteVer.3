import Image from "next/image";
import styles from "./index.module.css";

type SkillIconProps = {
  src: string;
  alt: string;
};

export default function SkillIcon({ src, alt }: SkillIconProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={styles.Logos}
        width={100}
        height={100}
      ></Image>
    </>
  );
}
