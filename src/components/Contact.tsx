import React from 'react';
  import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

  const Contact = () => {
    return (
      <section id="contact" className="min-h-screen flex items-center
  justify-center bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            견고하고 사용자 친화적인 웹 애플리케이션을 만드는 것을
  즐깁니다. <br />
            새로운 프론트엔드 개발 기회를 찾고 있으니, 편하게 연락 주세요!
          </p>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:johj703@nate.com"
              aria-label="Email"
              className="text-gray-600 hover:text-blue-600
  transition-colors duration-300"
            >
              <FaEnvelope size={32} />
            </a>
            <a
              href="https://github.com/johj703"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-black transition-colors
  duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/johj703/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700
  transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>

          <div className="mt-12">
            <a href="mailto:johj703@nate.com" className="bg-blue-600
  text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700
  transition-transform duration-300 inline-block transform
  hover:scale-105">
              메일 보내기
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;