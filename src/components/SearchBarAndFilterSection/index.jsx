import { useState } from 'react';
import { FilterBtn } from '../FilterBtn';
import { SearchBar } from '../SearchBar';
import { FilterMenu } from '../filterMenu';
import styles from './searchAndFilter.module.css';
/**
 * component that creates the search and filter seaction, the component calls three other components, the searchbar, a filter button and the filter menu
 * @param {props} props
 */
export function SearchBarAndFilterSection(props) {
  const { arrayToSearch, setSearched, setSearchedArray, searched } = props;
  const [clicked, setClicked] = useState(false);
  function openOrCloseFilterMenu() {
    setClicked(!clicked);
  }
  return (
    <div className={styles.searchBarAndFilterContainer}>
      <SearchBar
        arrayToSearch={arrayToSearch}
        setSearched={setSearched}
        setSearchedArray={setSearchedArray}
      ></SearchBar>
      <FilterBtn onClickFunction={openOrCloseFilterMenu}></FilterBtn>
      <FilterMenu
        clicked={clicked}
        onClickFunction={openOrCloseFilterMenu}
        searched={searched}
      ></FilterMenu>
    </div>
  );
}
