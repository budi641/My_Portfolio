"use client"

import { useState, useEffect } from "react"

interface GitHubProfile {
  name: string
  bio: string
  avatar_url: string
  html_url: string
  blog: string
  location: string
  public_repos: number
  followers: number
  following: number
}

export function useGitHubProfile(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) {
          throw new Error("Failed to fetch profile")
        }
        const data = await response.json()
        setProfile(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchProfile()
    }
  }, [username])

  return { profile, loading, error }
}
