import Image from 'next/image'
import Link from 'next/link'
import { ExperienceTimeline } from '@/components/experience-timeline'

const skills = ['React.js', 'FastAPI', 'RedisDB', 'Scala', 'MongoDB', 'Docker', 'GitHub', 'System Design']

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/VidhyadharanSS',
    icon: 'github',
    bgColor: 'bg-gray-900',
    hoverBg: 'hover:bg-gray-800'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vidhyadharan-s-s-336301232/',
    icon: 'linkedin',
    bgColor: 'bg-blue-600',
    hoverBg: 'hover:bg-blue-700'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCBZxG-OAs7OHlAdwrBBrYQw',
    icon: 'youtube',
    bgColor: 'bg-red-600',
    hoverBg: 'hover:bg-red-700'
  },
  {
    name: 'Hashnode',
    url: 'https://hashnode.com/@vidhyadharan179',
    icon: 'hashnode',
    bgColor: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-600'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 transform -skew-y-6 z-0"></div>
        <div className="relative z-10 py-8">
          <Image
            src="/1725876912593-2.jpeg"
            alt="Vidhyadharan S S"
            width={200}
            height={200}
            className="rounded-full mb-6 mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Vidhyadharan S S</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Aspiring Software Developer | Technical Trainee @ Zoho Corp. | B.Tech IT Student
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-3xl">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 p-3 rounded-lg text-white transition-colors ${link.bgColor} ${link.hoverBg}`}
          >
            {link.icon === 'hashnode' ? (
              <svg viewBox="0 0 337 337" fill="currentColor" className="w-5 h-5">
                <path d="M168.5,0C75.45,0,0,75.45,0,168.5S75.45,337,168.5,337S337,261.55,337,168.5S261.55,0,168.5,0z M168.5,304.4 c-75.11,0-136.1-60.99-136.1-136.1S93.39,32.2,168.5,32.2s136.1,60.99,136.1,136.1S243.61,304.4,168.5,304.4z M244.05,150.91 l-52.75-52.75c-9.94-9.94-26.07-9.94-36.01,0l-52.75,52.75c-9.94,9.94-9.94,26.07,0,36.01l52.75,52.75 c9.94,9.94,26.07,9.94,36.01,0l52.75-52.75C254,176.98,254,160.85,244.05,150.91z"/>
              </svg>
            ) : (
              <i className={`fab fa-${link.icon}`}></i>
            )}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="w-full max-w-3xl grid gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            I'm a passionate software developer with expertise in machine learning, cloud computing, and web development. Currently pursuing my B.Tech in Information Technology at TCE Madurai, I'm always eager to learn and apply new technologies to solve real-world problems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">Experience</h2>
          <ExperienceTimeline />
        </section>
      </div>
    </div>
  )
}

