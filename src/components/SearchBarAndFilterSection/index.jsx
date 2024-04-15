import { useState } from 'react';
import { FilterBtn } from '../FilterBtn';
import { SearchBar } from '../SearchBar';
import { FilterMenu } from '../filterMenu';
import styles from './searchAndFilter.module.css';
export function SearchBarAndFilterSection() {
  const [clicked, setClicked] = useState(false);
  function openOrCloseFilterMenu() {
    setClicked(!clicked);
  }
  return (
    <div className={styles.searchBarAndFilterContainer}>
      <SearchBar></SearchBar>
      <FilterBtn onClickFunction={openOrCloseFilterMenu}></FilterBtn>
      <FilterMenu
        clicked={clicked}
        onClickFunction={openOrCloseFilterMenu}
      ></FilterMenu>
    </div>
  );
}
