import React from 'react';

// 보유 기술 목록을 수정하세요.
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js',
  'Node.js', 'Tailwind CSS', 'Figma', 'Git', 'Vite'
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">보유 기술</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;