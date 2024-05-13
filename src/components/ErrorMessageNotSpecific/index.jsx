import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * Component that creates an error message where the error is not specified
 */
export function ErrorMessageNotSpecific() {
  return (
    <div className={commonStyles.errorMsg}>
      <h3>Sorry something went wrong, please try again later</h3>
    </div>
  );
}
