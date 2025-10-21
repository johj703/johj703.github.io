import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            isDark: false,
            toggleTheme: () => set((state: ThemeState) => ({ isDark: !state.isDark })),
            setTheme: (isDark: boolean) => set({ isDark }),
        }),
        {
            name: 'theme-storage',  // localStorage에 저장될 키 이름
            storage: createJSONStorage(() => localStorage),
        }
    )
);