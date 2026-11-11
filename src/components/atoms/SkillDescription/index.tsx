import styles from "./index.module.css";

type SkillDescriptionProps = {
  description: string;
};

export default function SkillDescription({
  description,
}: SkillDescriptionProps) {
  return (
    <>
      <p className={styles.Description}>{description}</p>
    </>
  );
}
