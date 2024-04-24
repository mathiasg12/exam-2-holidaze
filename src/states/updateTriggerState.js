import { create } from 'zustand';
/**
 *  A global hook that functions as a trigger for functions that need to be retriggered when an event occurs without refrehing the whole page.
 *  The state has a boolean value named 'update', and the state 'newUpdate' toggles the value of 'update'.
 *  For example, this hook is used in the PUT request that updates the avatar picture. If the request is successful,
 *  the function uses the 'newUpdate' state.
 *  The useEffect function that fetches the profile in the fetchUserProfile function has 'update' as a dependency and will therefore retrigger accordingly.

 */
export const useUpdateTriggerStore = create((set) => ({
  update: false,
  newUpdate: () => set((state) => ({ update: !state.update })),
}));
