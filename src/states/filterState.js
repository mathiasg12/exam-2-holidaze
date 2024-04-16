import { create } from 'zustand';
export const useFilterStore = create((set) => ({
  metaArray: [],
  maxGuests: 'all',
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
}));
