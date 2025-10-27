import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => {
    set((state) => {
      const newValue = !state.isDark;
      // localStorage에 직접 저장
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newValue ? "dark" : "light");
      }
      return { isDark: newValue };
    });
  },
  setTheme: (isDark) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
    set({ isDark });
  },
}));
