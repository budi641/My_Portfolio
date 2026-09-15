"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import type { MediaOrientation, ProjectMedia } from "@/lib/content"
import { driveFileId, drivePlaybackSrc, videoEmbedSrc, videoPosterCandidates } from "@/lib/youtube"

function mediaSrc(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return assetPath(path)
}

function PlayMark() {
  return (
    <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-ink/20">
      <span
        className="flex h-14 w-14 items-center justify-center border border-paper/80 bg-paper/90 text-ink"
        style={{ borderRadius: "var(--radius)" }}
      >
        <Play className="ml-0.5 h-6 w-6 fill-current" />
      </span>
    </span>
  )
}

function isPlaceholderThumb(image: HTMLImageElement) {
  return image.naturalWidth <= 120 && image.naturalHeight <= 90
}

function PosterImage({
  sources,
  alt,
  eager = false,
  onExhausted,
}: {
  sources: string[]
  alt: string
  eager?: boolean
  onExhausted?: () => void
}) {
  const [index, setIndex] = useState(0)
  const src = sources[index]

  if (!src) return null

  const fail = () => {
    if (index + 1 >= sources.length) onExhausted?.()
    else setIndex((value) => value + 1)
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={(event) => {
        if (isPlaceholderThumb(event.currentTarget)) fail()
      }}
      onError={fail}
    />
  )
}

function DrivePlayer({
  src,
  title,
  poster,
}: {
  src: string
  title: string
  poster?: string
}) {
  const [useEmbed, setUseEmbed] = useState(false)
  const fileSrc = drivePlaybackSrc(src)
  const embedSrc = videoEmbedSrc(src, true)

  if (useEmbed || !fileSrc) {
    return (
      <iframe
        title={title}
        src={embedSrc ?? undefined}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <video
      className="absolute inset-0 h-full w-full bg-ink object-contain"
      poster={poster}
      controls
      playsInline
      autoPlay
      onError={() => setUseEmbed(true)}
    >
      <source src={fileSrc} />
    </video>
  )
}

export function MediaFrame({
  item,
  alt,
  orientation = "landscape",
  playable = true,
  eager = false,
}: {
  item: ProjectMedia
  alt: string
  orientation?: MediaOrientation
  playable?: boolean
  eager?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)
  const isDrive = item.type === "video" && Boolean(driveFileId(item.src))
  const embedSrc = item.type === "video" ? videoEmbedSrc(item.src, true) : null
  const explicitPoster = item.poster?.trim() || (item.type === "image" ? item.src : "")
  const posterSources = explicitPoster
    ? [mediaSrc(explicitPoster)]
    : item.type === "video"
      ? videoPosterCandidates(item.src)
      : []
  const posterSrc = posterSources[0]
  const aspectClass = orientation === "portrait" ? "media-frame-portrait" : "media-frame-landscape"

  useEffect(() => {
    setPlaying(false)
    setPosterFailed(false)
  }, [item.src, item.type])

  const startPlayback = (event: { stopPropagation: () => void; preventDefault: () => void }) => {
    event.stopPropagation()
    event.preventDefault()
    if (playable && (embedSrc || isDrive)) setPlaying(true)
  }

  if (item.type === "image") {
    return (
      <div className="media-frame media-frame-still relative w-full">
        <img
          src={mediaSrc(item.src)}
          alt={alt}
          className="h-auto w-full"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    )
  }

  if (playing) {
    return (
      <div className={`media-frame media-frame-video relative ${aspectClass}`} onClick={(event) => event.stopPropagation()}>
        {isDrive ? (
          <DrivePlayer src={item.src} title={alt} poster={posterSrc} />
        ) : (
          <iframe
            title={alt}
            src={embedSrc ?? undefined}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    )
  }

  return (
    <div
      role={playable ? "button" : undefined}
      tabIndex={playable ? 0 : undefined}
      onClick={playable ? startPlayback : undefined}
      onKeyDown={
        playable
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") startPlayback(event)
            }
          : undefined
      }
      className={`media-frame media-frame-video relative ${aspectClass} w-full${playable ? " media-frame-play cursor-pointer" : ""}`}
      aria-label={playable ? `Play video for ${alt}` : undefined}
    >
      {posterFailed || posterSources.length === 0 ? null : (
        <PosterImage
          key={posterSources.join("|")}
          sources={posterSources}
          alt={alt}
          eager={eager}
          onExhausted={() => setPosterFailed(true)}
        />
      )}
      <PlayMark />
    </div>
  )
}
