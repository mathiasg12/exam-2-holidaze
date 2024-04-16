import styles from './moreBtn.module.css';
export function MoreBtn(props) {
  const { onClick, endReached } = props;
  if (!endReached) {
    return (
      <button className={styles.moreBtn} onClick={onClick}>
        Load more
      </button>
    );
  } else {
    return <p className={styles.moreBtnEndReached}>You reached the end</p>;
  }
}
