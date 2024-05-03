import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchfunctionality } from '../../js/searchFunctionality';
import styles from './searchBar.module.css';
import { useEffect, useState } from 'react';
import { SearchOverlay } from '../SearchOverlay';
import { useFilterStore } from '../../states/filterState';
/**
 * component that creates the searchbar, uses states to store the search value, if the search button is clicked and gets the clearFilter state which clears all stored state values.
 *  the component handles events like if the search symbol is clicked and if the search value changes.
 * @param {props} props
 */
export function SearchBar(props) {
  const { arrayToSearch, setSearched, setSearchedArray, searched } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const clearFilters = useFilterStore((state) => state.clearFilter);
  useEffect(() => {
    if (searched === false) {
      setSearchValue('');
    }
  }, [searched]);
  if (searchValue.length > 0) {
    const searchedArray = searchfunctionality(arrayToSearch, searchValue);
    function handleSearchClicked() {
      setSearched(true);
      setSearchClicked(true);
      setSearchedArray(searchedArray);
      clearFilters();
    }
    const handleEnterKeyPress = (keydown) => {
      if (keydown.key === 'Enter') {
        handleSearchClicked();
      }
    };
    console.log(searchedArray);
    return (
      <div>
        <div
          className={
            searchClicked === true
              ? styles.searchBarContainer
              : styles.searchBarContainerActive
          }
        >
          <input
            placeholder="Search for a venue"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase().trim());
              setSearchClicked(false);
            }}
            onKeyDown={handleEnterKeyPress}
            id="searchBar"
          ></input>
          <div
            className={
              searchClicked === true
                ? styles.magnifyingGlass
                : styles.magnifyingGlassActive
            }
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              role="button"
              type="button"
              onClick={handleSearchClicked}
            />
          </div>
        </div>
        <SearchOverlay
          array={searchedArray}
          searchClicked={searchClicked}
        ></SearchOverlay>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.searchBarContainer}>
          <input
            placeholder="Search for a venue"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase().trim());
              setSearchClicked(false);
            }}
            id="searchBar"
          ></input>
          <div className={styles.magnifyingGlass}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    );
  }
}
