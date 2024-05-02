import styles from './moreBtn.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * component that creates the more button, if the last page is reach,
 * the component show the user a message telling them "you reached the end" if not the load more button is there instead
 * @param {props} props
 */
export function MoreBtn(props) {
  const { onClick, endReached } = props;
  if (!endReached) {
    return (
      <button className={commonStyles.smallButtonYellow} onClick={onClick}>
        Load more
      </button>
    );
  } else {
    return <p className={styles.moreBtnEndReached}>You reached the end</p>;
  }
}
