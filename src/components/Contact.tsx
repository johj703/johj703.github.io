// src/components/Contact.tsx
"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";

const Contact = () => {
  const email = "johj703@nate.com";
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess("복사 완료!");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      () => {
        setCopySuccess("복사 실패");
        setTimeout(() => setCopySuccess(""), 2000);
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          견고하고 사용자 친화적인 웹 애플리케이션을 만드는 것을 즐깁니다.{" "}
          <br />
          새로운 프론트엔드 개발 기회를 찾고 있으니, 편하게 연락 주세요!
        </p>

        <div className="flex items-center justify-center mb-8 relative">
          <span className="text-lg text-gray-800 dark:text-gray-200 font-mono">
            {email}
          </span>

          <div className="relative group flex items-center">
            <button
              onClick={copyToClipboard}
              className="ml-3 p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Copy email address"
            >
              <FaCopy size={20} />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-md whitespace-nowrap">
              클릭해서 주소 복사
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800 dark:border-t-gray-700"></div>
            </div>
          </div>

          {copySuccess && (
            <span className="ml-3 text-sm text-green-600 dark:text-green-400 font-semibold">
              {copySuccess}
            </span>
          )}
        </div>

        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com/johj703"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/johj703/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
