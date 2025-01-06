import Link from 'next/link'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">Contact Me</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        I'd love to hear from you! Feel free to reach out through any of the following methods:
      </p>
      <div className="space-y-4">
        <Link
          href="mailto:hvdrksp2003@gmail.com"
          className="block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Send me an email
        </Link>
        <Link
          href="https://www.linkedin.com/in/vidhyadharan-s-s-336301232/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Connect on LinkedIn
        </Link>
      </div>
    </div>
  )
}

