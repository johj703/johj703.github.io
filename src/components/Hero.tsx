import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">조현준</h1>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          프론트엔드 개발자
        </h3>
        <p className="text-xl text-gray-600">
          새로운 기술 탐구를 즐기며, 견고하고 효율적인 코드로
          <br />더 나은 사용자 경험을 만드는 것을 목표로 합니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
