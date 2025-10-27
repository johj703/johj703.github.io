"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      // 화면의 중앙을 기준으로 섹션을 감지하도록 offset 조정
      const offset = window.innerHeight / 2;
      const currentPosition = window.scrollY + offset;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            currentPosition >= section.offsetTop &&
            currentPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    // 초기 로드 시 한 번 실행하여 활성 링크 설정
    handleScroll();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md dark:shadow-gray-800/50 z-40 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              // 클릭 시 즉시 상태를 업데이트하여 부드러운 사용자 경험 제공
              onClick={() => setActiveLink(link.id)}
              className={`transition-colors duration-300 text-lg ${
                activeLink === link.id
                  ? "text-blue-600 dark:text-blue-400 font-semibold" // 활성 링크 스타일
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" // 비활성 링크 스타일
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
