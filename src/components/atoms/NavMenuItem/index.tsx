import styles from "./index.module.css";

type Props = {
  label: string;
  href: string;
};

export default function NavMenuItem({ label, href }: Props) {
  return (
    <li className={styles.ListItem}>
      <a href={href}>{label}</a>
    </li>
  );
}