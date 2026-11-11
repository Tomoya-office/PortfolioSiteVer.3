import styles from "./index.module.css";

type SkillNameProps = {
  name: string;
};

export default function SkillName({ name }: SkillNameProps) {
  return (
    <>
      <h4 className={styles.SkillName}>{name}</h4>
    </>
  );
}
