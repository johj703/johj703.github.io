/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 클래스 기반 다크모드 활성화
  theme: {
    extend: {
      colors: {
        // 다크모드용 커스텀 컬러 추가 기능
      },
    },
  },
  plugins: [],
};
