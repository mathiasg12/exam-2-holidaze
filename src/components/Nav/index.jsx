import { NavLink, useNavigate } from 'react-router-dom';
import styles from './nav.module.css';
import { useLoggedInStore } from '../../states/loggedInState';
import { HeaderAvatar } from '../HeaderAvatar';
import { useProfileAvatar } from '../../states/profileAvatarState';
import { useState } from 'react';
/**
 * The navigation component, includes links, takes two states from props called "clicked" and "setClicked" which is true or false depending if the user has clicked the hamburger icon.
 * the component also
 * includes a function which toggles a state called "clicked" when a user clicks a link, the state toggles the visabilty of the hamburger menu so when a user clicks a link
 * the hamburger menu collapses
 * @param {prop} props
 */
export function Nav(props) {
  const { clicked, setClicked } = props;
  const [avatarClick, setAvatarClick] = useState(false);
  const logOut = useLoggedInStore((state) => state.logOut);
  const navigate = useNavigate();
  let isLoggedIn = useLoggedInStore((state) => state.loggedIn);
  const avatarUrl = useProfileAvatar((state) => state.profileImage);
  const userName = localStorage.getItem('name');
  function handleAvatarClick() {
    setAvatarClick(!avatarClick);
  }
  function onLogoutClick() {
    logOut();
    navigate('/');
  }
  function handleLinkClick() {
    setClicked(!clicked);
  }
  return (
    <nav className={styles.nav} id="Nav">
      <ul className={clicked ? styles.navUlVisible : styles.navUl}>
        <li className={styles.navLi}>
          <NavLink to="/" className={styles.navLink} onClick={handleLinkClick}>
            Venues
          </NavLink>
        </li>
        <li className={isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink
            to="/login"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Login
          </NavLink>
        </li>
        <li className={isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink
            to="/signUp"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Sign up
          </NavLink>
        </li>
        <li className={!isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink
            to="/profile"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Profile
          </NavLink>
        </li>
        <li className={!isLoggedIn ? styles.displayNone : styles.navLi}>
          <p
            onClick={() => {
              handleLinkClick();
              onLogoutClick();
            }}
            type="button"
            role="button"
            className={styles.navButton}
          >
            LogOut
          </p>
        </li>
        <li className={styles.headerAvatarDesktop}>
          <HeaderAvatar
            isLoggedIn={isLoggedIn}
            avatarUrl={avatarUrl}
            handleAvatarClick={handleAvatarClick}
          ></HeaderAvatar>
        </li>
      </ul>
      <p className={!avatarClick ? styles.displayNone : styles.userName}>
        Logged in as: {userName}
      </p>
    </nav>
  );
}
