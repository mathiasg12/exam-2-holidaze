import styles from './confirmBtn.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * the confirm component creates the confirm button
 * @param {props} props
 */
export function ComfirmBtn(props) {
  const { onClickFunction } = props;
  return (
    <button
      className={`${styles.confirmeBtn} ${commonStyles.smallButtonYellow}`}
      onClick={onClickFunction}
    >
      Comfirm
    </button>
  );
}
