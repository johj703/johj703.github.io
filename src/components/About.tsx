// src/components/About.tsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          자기소개
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          안녕하세요,{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-400">
            사용자 중심의 웹
          </strong>
          을 만드는 프론트엔드 개발자 조현준입니다.
          <br />
          <br />
          저는 코드가 시각적으로 구현되고 사용자와 생생하게 상호작용하는 과정에
          큰 매력을 느껴 개발을 시작했습니다. 단순히 기능을 만드는 것을 넘어,{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-400">
            직관적이고 편안한 사용자 경험(UX)을 제공하는 것
          </strong>
          을 최우선으로 생각합니다.
          <br />
          <br />
          동료와의 원활한{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-400">
            소통과 지식 공유
          </strong>
          를 통해 함께 성장하는 것을 즐기며, 앞으로도 기술과 사용자 모두에게
          가치를 더하는 개발자가 되겠습니다.
        </p>
      </div>
    </section>
  );
};

export default About;
