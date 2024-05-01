import styles from './errorMessageNotSpecific.module.css';
export function ErrorMessageNotSpecific() {
  return (
    <div className={styles.errorMsg}>
      <h3>Sorry something went wrong, please try again later</h3>
    </div>
  );
}
