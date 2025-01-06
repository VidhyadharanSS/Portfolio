import { CalendarIcon } from '@radix-ui/react-icons'

const experiences = [
  {
    title: 'Technical Trainee',
    company: 'Zoho Corporation, Chennai, India',
    period: 'September 2024 - Present',
  },
  {
    title: 'Web Developer Intern',
    company: 'DCE Technology',
    location: 'Virudhunagar',
    period: 'December 2023 - January 2024',
  },
  {
    title: 'B.Tech IT Student',
    company: 'TCE Madurai',
    period: '2021 - 2025',
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            {index !== experiences.length - 1 && <div className="w-0.5 h-full bg-red-600" />}
          </div>
          <div className="pb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{experience.title}</h3>
            <p className="text-red-600 dark:text-red-400">{experience.company}</p>
            {experience.location && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{experience.location}</p>
            )}
            <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {experience.period}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

