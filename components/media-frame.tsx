"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import type { MediaOrientation, ProjectMedia } from "@/lib/content"
import { driveFileId, videoEmbedSrc, videoPosterCandidates } from "@/lib/youtube"

function mediaSrc(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return assetPath(path)
}

function PlayMark() {
  return (
    <span className="absolute inset-0 z-10 flex items-center justify-center bg-ink/20">
      <span
        className="flex h-14 w-14 items-center justify-center border border-paper/80 bg-paper/90 text-ink"
        style={{ borderRadius: "var(--radius)" }}
      >
        <Play className="ml-0.5 h-6 w-6 fill-current" />
      </span>
    </span>
  )
}

function PosterImage({
  sources,
  alt,
  onExhausted,
}: {
  sources: string[]
  alt: string
  onExhausted?: () => void
}) {
  const [index, setIndex] = useState(0)
  const src = sources[index]
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
      onError={() => {
        if (index + 1 >= sources.length) onExhausted?.()
        else setIndex((value) => value + 1)
      }}
    />
  )
}

export function MediaFrame({
  item,
  alt,
  orientation = "landscape",
  playable = true,
}: {
  item: ProjectMedia
  alt: string
  orientation?: MediaOrientation
  playable?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)
  const isDrive = item.type === "video" && Boolean(driveFileId(item.src))
  const embedSrc = item.type === "video" ? videoEmbedSrc(item.src, playing) : null
  const explicitPoster = item.poster?.trim() || (item.type === "image" ? item.src : "")
  const posterSources = explicitPoster
    ? [mediaSrc(explicitPoster)]
    : item.type === "video"
      ? videoPosterCandidates(item.src)
      : []
  const aspectClass = orientation === "portrait" ? "media-frame-portrait" : "media-frame-landscape"
  const showEmbed = Boolean(embedSrc) && (playing || posterFailed || isDrive)

  if (item.type === "image") {
    return (
      <div className="media-frame media-frame-still relative w-full">
        <img
          src={mediaSrc(item.src)}
          alt={alt}
          className="h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  if (showEmbed) {
    return (
      <div className={`media-frame relative ${aspectClass} bg-ink`}>
        <iframe
          title={alt}
          src={embedSrc ?? undefined}
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: playable ? "auto" : "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {playable ? null : <PlayMark />}
      </div>
    )
  }

  const posterImage = (
    <PosterImage
      sources={posterSources}
      alt={playable ? "" : alt}
      onExhausted={() => setPosterFailed(true)}
    />
  )

  if (!playable) {
    return (
      <div className={`media-frame relative ${aspectClass} w-full`}>
        {posterImage}
        <PlayMark />
      </div>
    )
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => embedSrc && setPlaying(true)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          if (embedSrc) setPlaying(true)
        }
      }}
      className={`media-frame media-frame-play relative ${aspectClass} w-full cursor-pointer`}
      aria-label={`Play video for ${alt}`}
    >
      {posterImage}
      <PlayMark />
    </div>
  )
}
