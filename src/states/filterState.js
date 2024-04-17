import { create } from 'zustand';
/**
 * store that saves the filter setting across pages, so when a user uses the filter setting and goes to a venue they like, if they come back to view more venues they dont have to
 * use the filter settings all over again, has three state values, metaArray which is an array that saves the filter meta key words, maxGuest which is the maximum number of guest and
 * checkboxes which is an array keeping track of which checkbox is checked or not
 */
export const useFilterStore = create((set) => ({
  metaArray: [],
  maxGuests: 'all',
  checkBoxes: [],
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
    set(() => ({ metaArray: [], maxGuests: 'all', checkBoxes: [] })),
}));
