import styles from "./index.module.css";

export default function ScrollDown() {
  return (
<div className={styles.ScrollGuide}>
  <span className={styles.ScrollLine}></span>
  <span className={styles.ScrollCircle}></span>
</div>
  );
}