import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchfunctionality } from '../../js/searchFunctionality';
import styles from './searchBar.module.css';
import { useEffect, useState } from 'react';
import { SearchOverlay } from '../SearchOverlay';
import { useFilterStore } from '../../states/filterState';
export function SearchBar(props) {
  const { arrayToSearch, setSearched, setSearchedArray } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const clearFilters = useFilterStore((state) => state.clearFilter);
  function handleSearchChange(change) {
    setSearchValue(change.target.value.toLowerCase().trim());
    setSearchClicked(false);
  }
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
        <div className={styles.searchBarContainerActive}>
          <input
            placeholder="Search for a venue"
            onChange={handleSearchChange}
            onKeyDown={handleEnterKeyPress}
            id="searchBar"
          ></input>
          <div className={styles.magnifyingGlassActive}>
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
            onChange={handleSearchChange}
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
