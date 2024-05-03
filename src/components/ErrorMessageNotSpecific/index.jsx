import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
export function ErrorMessageNotSpecific() {
  return (
    <div className={commonStyles.errorMsg}>
      <h3>Sorry something went wrong, please try again later</h3>
    </div>
  );
}
