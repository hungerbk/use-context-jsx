import { create } from "zustand";

const useStore = create((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
