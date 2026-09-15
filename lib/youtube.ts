export function youtubeId(url: string) {
  try {
    const parsed = new URL(url.trim())
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.split("/").filter(Boolean)[0] || null
    }
    const fromQuery = parsed.searchParams.get("v")
    if (fromQuery) return fromQuery
    const embed = parsed.pathname.match(/\/embed\/([^/]+)/)
    return embed?.[1] ?? null
  } catch {
    return null
  }
}

export function driveFileId(url: string) {
  try {
    const parsed = new URL(url.trim())
    if (!parsed.hostname.includes("drive.google.com")) return null
    const fromPath = parsed.pathname.match(/\/file\/d\/([^/]+)/)
    if (fromPath?.[1]) return fromPath[1]
    return parsed.searchParams.get("id")
  } catch {
    return null
  }
}

export function videoEmbedSrc(url: string, autoplay = false) {
  const youtube = youtubeId(url)
  if (youtube) {
    const params = autoplay ? "autoplay=1&rel=0&playsinline=1" : "rel=0&playsinline=1"
    return `https://www.youtube.com/embed/${youtube}?${params}`
  }

  const drive = driveFileId(url)
  if (drive) return `https://drive.google.com/file/d/${drive}/preview`

  return null
}

export function drivePlaybackSrc(url: string) {
  const drive = driveFileId(url)
  if (!drive) return null
  return `https://drive.google.com/uc?export=download&id=${drive}`
}

export function videoPosterCandidates(url: string) {
  const youtube = youtubeId(url)
  if (youtube) {
    return [
      `https://i.ytimg.com/vi/${youtube}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${youtube}/hqdefault.jpg`,
    ]
  }

  const drive = driveFileId(url)
  if (drive) {
    return [
      `https://lh3.googleusercontent.com/d/${drive}=w1200`,
      `https://lh3.googleusercontent.com/d/${drive}`,
      `https://drive.google.com/thumbnail?id=${drive}&sz=w1000`,
    ]
  }

  return []
}
