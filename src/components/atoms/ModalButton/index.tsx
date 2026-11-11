import styles from "./index.module.css";

type Props = {
  onClose: () => void;
};

export default function ModalButton({ onClose }: Props) {
  return (
    <>
      <button
        type="button"
        className={styles.CloseButton}
        onClick={onClose}
        aria-label="モーダルを閉じる"
      >
        ×
      </button>
    </>
  );
}
