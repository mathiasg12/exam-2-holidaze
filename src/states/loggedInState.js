import { create } from 'zustand';
/**
 * small zustand store to manage the loggedIn state so header and footer are updated
 */
export const useLoggedInStore = create((set) => ({
  loggedIn: false,
  login: () => set({ loggedIn: true }),
  logOut: () => set({ loggedIn: false }),
}));
