'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GitHubEvent {
  type: string
  repo: { name: string }
  created_at: string
  payload: {
    commits?: { message: string }[]
  }
}

const GitHubActivity = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/jayson-s/events/public')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 5)))
      .catch((err) => console.error('Failed to fetch GitHub events:', err))
  }, [])

  const EVENT_LABELS: { [key: string]: string } = {
    PushEvent: 'Committed and Pushed to',
    CreateEvent: 'Created a new branch in',
    PullRequestEvent: 'Opened a pull request in',
    IssuesEvent: 'Opened an issue in',
    WatchEvent: 'Starred',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="mb-5 text-lg font-medium">Latest GitHub Activity</h3>
      <div className="flex flex-col space-y-2">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-start justify-between rounded-3xl bg-zinc-200/80 p-4 dark:bg-zinc-800/30"
          >
            <div className="flex flex-col">
              <p className="text-sm text-zinc-700 dark:text-zinc-200">
                <span className="font-medium">
                  {EVENT_LABELS[event.type] || event.type}
                </span>{' '}
                <a
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {event.repo.name}
                </a>
              </p>
              {event.payload?.commits && (
                <ul className="mt-1 list-disc list-inside text-xs text-zinc-500 dark:text-zinc-400">
                  {event.payload.commits.map((commit, i) => (
                    <li key={i}>{commit.message}</li>
                  ))}
                </ul>
              )}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap pl-4">
              {new Date(event.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default GitHubActivity