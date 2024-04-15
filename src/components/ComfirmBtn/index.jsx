import styles from './confirmBtn.module.css';
export function ComfirmBtn(props) {
  const { onClickFunction } = props;
  return (
    <button className={styles.comfirmBtn} onClick={onClickFunction}>
      Comfirm
    </button>
  );
}
