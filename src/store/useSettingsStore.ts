import { create } from "zustand";
import { persist } from "zustand/middleware";

type Density = "comfortable" | "compact";

interface SettingsState {
  density: Density;
  animations: boolean;
  setDensity: (d: Density) => void;
  toggleAnimations: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      density: "comfortable",
      animations: true,
      setDensity: (d) => set({ density: d }),
      toggleAnimations: () =>
        set((state) => ({ animations: !state.animations })),
    }),
    {
      name: "trackforge-settings",
    }
  )
);
