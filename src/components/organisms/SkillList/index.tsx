import styles from "./index.module.css";

import SkillName from "../../atoms/SkillName";
import SkillDescription from "../../atoms/SkillDescription";
import SkillIcon from "../../atoms/SkillIcon";

type Skill = {
  name: string;
  image: string;
  alt: string;
  description: string;
};

type SkillListProps = {
  skill: Skill;
};

export default function SkillList({ skill }: SkillListProps) {
  return (
    <li className={styles.SkillPosition}>
      <SkillIcon
      src={skill.image}
      alt={skill.alt}
      />
      <div className={styles.Skill}>
        <SkillName name={skill.name} />
        <SkillDescription description={skill.description}/>
      </div>
    </li>
  );
}
