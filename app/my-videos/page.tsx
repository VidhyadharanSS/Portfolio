import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: 'Introduction to FastAPI : Tutorial 1',
    description: 'Learn the basics of FastAPI in this introductory tutorial.',
    youtubeUrl: 'https://youtu.be/qCn2P2FbKSs',
  },
]

export default function MyVideos() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">My Videos</h1>
      <div className="grid gap-6">
        {videos.map((video) => (
          <div key={video.id} className="border border-red-200 dark:border-red-800 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{video.title}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{video.description}</p>
            <Link 
              href={video.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Watch on YouTube
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

