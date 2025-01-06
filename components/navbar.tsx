'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'My Videos', path: '/my-videos' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Me', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600 dark:text-red-400 font-serif">
          Vidhyadharan S S
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                pathname === item.path
                  ? 'text-red-600 dark:text-red-400 font-semibold border-b-2 border-red-600 dark:border-red-400'
                  : 'text-gray-600 dark:text-gray-300'
              } hover:text-red-600 dark:hover:text-red-400 transition-colors pb-1`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

