import styles from "./index.module.css";

type PlayButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function PlayButton({
  isOpen,
  onClick,
}: PlayButtonProps) {
  return (
    <button
      type="button"
      className={styles.PlayButton}
      onClick={onClick}
      aria-label={
        isOpen ? "スキルを閉じる" : "すべてのスキルを表示"
      }
      aria-expanded={isOpen}
    >
      <span className={styles.Triangle}></span>
    </button>
  );
}