import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">연락처</h2>
        <p className="text-lg text-gray-700 mb-8">새로운 기회에 항상 열려있습니다. 편하게 연락 주세요!</p>
        <a href="mailto:your.email@example.com" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          메일 보내기
        </a>
      </div>
    </section>
  );
};

export default Contact;