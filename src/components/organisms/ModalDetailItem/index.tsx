import styles from "./index.module.css";

type Props = {
  title: string;
  details: string[];
};

export default function ModalDetailItem({ title, details }: Props) {
  return (
    <li className={styles.EachItem}>
      <h4 className={styles.Headline}>{title}</h4>
      <div className={styles.LineSpacing}>
        {details.map((item, index) => (
          <p className={styles.Detail} key={index}>
            {item}
          </p>
        ))}
      </div>
    </li>
  );
}