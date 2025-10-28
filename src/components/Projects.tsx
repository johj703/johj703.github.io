// src/components/Projects.tsx
import React from "react";

const projects = [
  {
    title: "달고나",
    description:
      "달고나는 그림을 통해 일상의 감정과 추억을 기록하는 라이프스타일 아카이빙 플랫폼입니다. 텍스트 중심의 기록 방식에서 벗어나, 사용자가 직접 그림을 그려 감정을 표현하는 독창적인 방식을 제공합니다. 어린 시절 그림일기와 같은 경험을 통해 자신만의 소중한 기억을 더욱 특별하게 간직하도록 돕습니다.",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "git",
      "ReactQuery",
      "Vercel",
    ],
    liveUrl: "https://dalgona.vercel.app/",
    repoUrl: "https://github.com/johj703/dalgona",
  },
  {
    title: "두 번째 프로젝트",
    description:
      "두 번째 프로젝트에 대한 설명입니다. 다른 기술 스택이나 어려웠던 점을 어떻게 해결했는지 보여주세요.",
    tech: ["Vue.js", "TypeScript", "Vite"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700/50 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  배포 사이트
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
