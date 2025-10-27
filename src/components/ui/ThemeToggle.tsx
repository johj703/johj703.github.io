"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // 클라이언트 마운트 확인
  useEffect(() => {
    setMounted(true);
    // localStorage에서 초기 테마 로드
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      useThemeStore.getState().setTheme(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 다크모드 클래스 적용
  useEffect(() => {
    if (!mounted) return;

    console.log("isDark changed:", isDark); // 디버깅용

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, mounted]);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <Moon size={24} className="text-indigo-600" />
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        console.log("Button clicked, current isDark:", isDark); // 디버깅용
        toggleTheme();
      }}
      className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {isDark ? (
        <Sun size={24} className="text-yellow-400" />
      ) : (
        <Moon size={24} className="text-indigo-600" />
      )}
    </button>
  );
}
