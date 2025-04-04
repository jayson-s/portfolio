'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CommitData {
  repo: string
  message: string
  url: string
  date: string
}

const REPOS = [
  'jayson-s/portfolio',
  'jayson-s/Jayson-s',
  'jayson-s/flavour_pages',
  'jayson-s/LifeBalancePlus',
]

const GitHubActivity = () => {
  const [commits, setCommits] = useState<CommitData[]>([])

  useEffect(() => {
    const fetchCommits = async () => {
      const fetched: CommitData[] = []

      await Promise.all(
        REPOS.map(async (repo) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${repo}/commits`)
            const data = await res.json()

            if (!data || !Array.isArray(data)) return

            // Limit to 3 commits per repo
            data.slice(0, 3).forEach((commit: any) => {
              fetched.push({
                repo,
                message: commit.commit.message,
                url: commit.html_url,
                date: commit.commit.author.date,
              })
            })
          } catch (error) {
            console.error(`Failed to fetch commits for ${repo}`, error)
          }
        })
      )
      // Sort all fetched commits by date and limit to 6 globally
      const sorted = fetched
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6)

      setCommits(sorted)
    }
    fetchCommits()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="mb-5 text-lg font-medium">Latest GitHub Activity</h3>
      <div className="flex flex-col space-y-2">
        {commits.map((commit, index) => (
          <div
            key={index}
            className="flex items-start justify-between rounded-3xl bg-zinc-200/80 p-4 dark:bg-zinc-800/30"
          >
            <div className="flex flex-col">
              <p className="text-sm text-zinc-700 dark:text-zinc-200">
                <span className="font-medium">Committed to </span>
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {commit.repo}
                </a>
              </p>
              <ul className="mt-1 list-disc list-inside text-xs text-zinc-500 dark:text-zinc-400">
                <li>{commit.message}</li>
              </ul>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap pl-4">
              {new Date(commit.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default GitHubActivity