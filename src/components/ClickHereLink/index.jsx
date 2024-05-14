import { Link } from 'react-router-dom';
import styles from './clickHereLink.module.css';
/**
 * Component that creates the Click here link used on the "sign up" form and "login" form
 * @param {props} props
 */
export function ClickHereLink(props) {
  const { linkTo, text } = props;
  return (
    <div className={styles.linkCon}>
      <p>{text}</p>
      <Link to={linkTo}>Click here</Link>
    </div>
  );
}
