import { create } from 'zustand';
/**
 * Store that saves the filter settings across pages, so when a user uses the filter settings and goes to a venue they like, if they come back to view more venues they don't have to
 * use the filter settings all over again. It has four state values: metaArray, which is an array that saves the filter meta keywords, maxGuest, which is the maximum number of guests,
 * sorted, which is the user's preferred sort method, and checkboxes, which is an array keeping track of which checkboxes are checked or not.
 */
export const useFilterStore = create((set) => ({
  metaArray: [],
  maxGuests: 'all',
  checkBoxes: [],
  sorted: 'newestFirst',
  filterSettings: (inputValue, checked) => {
    set((state) => {
      if (checked) {
        return { metaArray: [...state.metaArray, inputValue] };
      } else {
        return {
          metaArray: state.metaArray.filter(
            (newValue) => newValue !== inputValue
          ),
        };
      }
    });
  },
  changeMaxGuests: (inputValue) => {
    set(() => {
      return { maxGuests: inputValue };
    });
  },
  changeSorted: (inputValue) => {
    set(() => {
      return { sorted: inputValue };
    });
  },
  checkMetaArray: (state) => {
    const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckBoxes.forEach((singleCheckBox) => {
      if (state.metaArray.includes(singleCheckBox.value)) {
        singleCheckBox.checked = true;
      } else {
        singleCheckBox.checked = false;
      }
    });
  },
  clearFilter: () =>
    set(() => ({
      metaArray: [],
      maxGuests: 'all',
      checkBoxes: [],
      sorted: 'newestFirst',
    })),
}));
