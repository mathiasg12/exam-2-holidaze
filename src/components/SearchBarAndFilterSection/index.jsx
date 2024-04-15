import { FilterBtn } from '../FilterBtn';
import { SearchBar } from '../SearchBar';
import { FilterMenu } from '../filterMenu';
import styles from './searchAndFilter.module.css';
export function SearchBarAndFilterSection() {
  return (
    <div className={styles.searchBarAndFilterContainer}>
      <SearchBar></SearchBar>
      <FilterBtn></FilterBtn>
      <FilterMenu></FilterMenu>
    </div>
  );
}
