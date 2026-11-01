import styles from "./index.module.css";

type Props = {
  title: string;
  detail: string;
};

export default function ModalInfoItem({ title, detail }: Props) {
  return (
    <li className={styles.EachItem}>
      <h4 className={styles.Headline}>{title}</h4>
      <p className={styles.Detail}>{detail}</p>
    </li>
  );
}
