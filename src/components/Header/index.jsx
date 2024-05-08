import { Nav } from '../Nav';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/**
 * function that creates the header component, the header includes a logo and a nav, and also a hamburger icon for mobile.
 */
export function Header() {
  const [clicked, setClicked] = useState(false);
  function handleHamburgerClick() {
    setClicked(!clicked);
  }
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
          <div className={styles.hamburgerWrapper}>
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
          </div>
        </div>
        <Nav clicked={clicked}></Nav>
      </div>
    </header>
  );
}
