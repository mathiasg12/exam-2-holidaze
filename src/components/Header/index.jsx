import { Nav } from '../Nav';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoggedInStore } from '../../states/loggedInState';
import { useProfileAvatar } from '../../states/profileAvatarState';
import { HeaderAvatar } from '../HeaderAvatar';
/**
 * function that creates the header component, the header includes a logo and a nav, and also a hamburger icon for mobile.
 */
export function Header() {
  const [clicked, setClicked] = useState(false);
  const [avatarClick, setAvatarClick] = useState(false);
  function handleAvatarClick() {
    setAvatarClick(!avatarClick);
    if (clicked) {
      setClicked(false);
    }
  }
  function handleHamburgerClick() {
    setClicked(!clicked);
    if (avatarClick) {
      setAvatarClick(false);
    }
  }
  const avatarUrl = useProfileAvatar((state) => state.profileImage);
  const userName = localStorage.getItem('name');
  let isLoggedIn = useLoggedInStore((state) => state.loggedIn);
  return (
    <header>
      <div className={styles.logoAndNavContainer}>
        <div className={styles.headerImgWrapperAndHamburger}>
          <Link to="/">
            {' '}
            <img
              src="../pictures/logo.png"
              alt="logo"
              className={styles.img}
            ></img>
          </Link>
          <div className={styles.hamburgerAndAvatarWrapper}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleHamburgerClick}
              className={!clicked ? styles.hamburger : styles.displayNone}
            />
            <span
              onClick={handleHamburgerClick}
              className={clicked ? styles.hamburger : styles.displayNone}
            >
              X
            </span>
            <div className={styles.headerAvatarMobile}>
              <HeaderAvatar
                handleAvatarClick={handleAvatarClick}
                avatarUrl={avatarUrl}
                isLoggedIn={isLoggedIn}
              ></HeaderAvatar>
            </div>
          </div>
        </div>
        <Nav clicked={clicked} setClicked={setClicked}></Nav>
        <p
          className={
            !avatarClick || !isLoggedIn ? styles.displayNone : styles.userName
          }
        >
          Logged in as: {userName}
        </p>
      </div>
    </header>
  );
}
