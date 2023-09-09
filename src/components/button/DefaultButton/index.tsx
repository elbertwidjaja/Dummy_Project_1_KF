import styles from "./styles.module.scss";

type DefaultButtonProps = {
  detail: string;
  onClick: () => void;
};

function DefaultButton({ detail, onClick }: DefaultButtonProps) {
  return (
    <div className={styles.button_border}>
      <button className={styles.button} onClick={onClick}>
        {detail}
      </button>
    </div>
  );
}

export default DefaultButton;
