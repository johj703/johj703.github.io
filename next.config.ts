import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages에서 정적 내보내기 사용
  output: "export",

  // GitHub Pages에서는 이미지 최적화 사용 불가능
  images: {
    unoptimized: true,
  },

  // URL 끝에 슬래시 추가하여 경로 일관성 유지
  trailingSlash: true,
};

export default nextConfig;
