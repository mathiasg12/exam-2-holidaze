import styles from './headerAvatar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
/**
 * function that creates the component HeaderAvatar. this component displays the avatar picture in the header.
 * @param {props} props
 */
export function HeaderAvatar(props) {
  const { isLoggedIn, handleAvatarClick, avatarUrl } = props;
  return (
    <div
      className={!isLoggedIn ? styles.displayNone : styles.avatarNav}
      role="button"
      type="button"
      onClick={handleAvatarClick}
    >
      <img
        src={avatarUrl}
        alt="avatar nav"
        onError={(errorEvent) => {
          errorEvent.target.src = '../pictures/noImage.jpg';
        }}
      />
      <FontAwesomeIcon icon={faChevronDown} className={styles.faChevronDown} />
    </div>
  );
}
