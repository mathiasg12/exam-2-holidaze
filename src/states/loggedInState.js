import { create } from 'zustand';
/**
 * small zustand store to manage the loggedIn state so header and footer are updated, the store wont reset aftet page refresh since teh loggedIn value fetches  "loggedin" from local storage
 */
export const useLoggedInStore = create((set) => ({
  loggedIn: localStorage.getItem('loggedIn') === 'true',
  login: () => set({ loggedIn: true }),
  logOut: () => {
    localStorage.clear();
    set({ loggedIn: false });
  },
}));
