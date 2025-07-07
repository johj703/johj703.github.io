import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">자기소개</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          안녕하세요! 저는 [도시 이름]을 기반으로 활동하는 프론트엔드 개발자입니다.
          <br />
          깔끔하고 반응성이 뛰어나며 사용자 친화적인 웹 애플리케이션을 구축하는 데 열정을 가지고 있습니다.
          <br />
          최신 웹 기술에 대한 깊은 이해와 함께, 끊임없이 배우고 성장하는 것을 중요하게 생각합니다.
        </p>
      </div>
    </section>
  );
};

export default About;