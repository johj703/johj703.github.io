import React from 'react';

// 진행했던 프로젝트 정보로 수정하세요.
const projects = [
  {
    title: '첫 번째 프로젝트',
    description: '첫 번째 프로젝트에 대한 간략한 설명입니다. 핵심 기능과 사용된 기술을 강조하여 작성하세요.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: '#', // 실제 배포된 주소로 변경
    repoUrl: '#', // 실제 깃허브 주소로 변경
  },
  {
    title: '두 번째 프로젝트',
    description: '두 번째 프로젝트에 대한 설명입니다. 다른 기술 스택이나 어려웠던 점을 어떻게 해결했는지 보여주세요.',
    tech: ['Vue.js', 'TypeScript', 'Vite'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map(t => <span key={t} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{t}</span>)}
              </div>
              <div className="flex justify-center space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">라이브 데모</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;