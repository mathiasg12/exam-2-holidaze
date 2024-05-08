import { Link } from 'react-router-dom';
import styles from './clickHereLink.module.css';
export function ClickHereLink(props) {
  const { linkTo } = props;
  return (
    <div className={styles.linkCon}>
      <p>Already a user?</p>
      <Link to={linkTo}>Click here</Link>
    </div>
  );
}
