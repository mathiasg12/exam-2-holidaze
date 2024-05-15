import { create } from 'zustand';
/**
 * small store that sets the profile avatar URL as a global state
 */
export const useProfileAvatar = create((set) => ({
  profileImage: '../pictures/noImage.jpg',
  setProfileImage: (url) => {
    set({ profileImage: url });
  },
}));
