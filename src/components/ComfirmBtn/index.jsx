import styles from './confirmBtn.module.css';
/**
 * the confirm component creates the confirm button
 * @param {props} props
 */
export function ComfirmBtn(props) {
  const { onClickFunction } = props;
  return (
    <button className={styles.comfirmBtn} onClick={onClickFunction}>
      Comfirm
    </button>
  );
}
