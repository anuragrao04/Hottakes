import { create } from "zustand";

export const useHottakeStore = create((set) => ({
  hottake: "",
  setHottake: (newHottake: string) => set(() => ({ hottake: newHottake })),
}));
