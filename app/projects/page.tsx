import Link from 'next/link'

const projects = [
  {
    name: 'NLP Text Recognition',
    description: 'An MLOps project for emotion detection from texts.',
    github: 'https://github.com/VidhyadharanSS/nlp-text-recog',
  },
  {
    name: 'CloudX',
    description: 'A decentralized cloud storage and AI-powered image processing platform.',
    github: 'https://github.com/VidhyadharanSS/cloux-one',
  },
  {
    name: 'CaseMate',
    description: 'A case management application for lawyers, law students, and public users.',
    github: 'https://github.com/VidhyadharanSS/CaseMate',
  },
  {
    name: 'Quiz Maker',
    description: 'A quiz creation and management application built with React and TypeScript.',
    github: 'https://github.com/VidhyadharanSS/Quiz-maker',
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="border border-red-200 dark:border-red-800 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.name}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
            <Link 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

