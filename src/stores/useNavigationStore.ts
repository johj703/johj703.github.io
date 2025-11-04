import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavigationStore {
    activeSection: string,
    setActiveSection: (section: string) => void;
    section: string[];
}

export const useNavigationStore = create<NavigationStore>()(
    persist(
        (set) => ({
            activeSection: "here",
            section: ["here", "about", "skills", "projects", "contact"],
            setActiveSection: (section: string) =>
                set({ activeSection: section })
        }),
        {
            name: "navigation-storage",
            partialize: (state) => ({ activeSection: state.activeSection}),
        }
    )
);