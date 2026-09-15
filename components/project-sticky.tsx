"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MediaFrame } from "@/components/media-frame"
import { projectMedia, type MediaOrientation, type Project } from "@/lib/content"

function wrapIndex(index: number, length: number) {
  return (index + length) % length
}

function GalleryArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <>
      <button
        type="button"
        className="gallery-arrow gallery-arrow-prev"
        aria-label="Previous media"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        type="button"
        className="gallery-arrow gallery-arrow-next"
        aria-label="Next media"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </>
  )
}

export function ProjectSticky({
  project,
  orientation = "landscape",
  tiltClass,
  titleClassName,
}: {
  project: Project
  orientation?: MediaOrientation
  tiltClass: string
  titleClassName: string
}) {
  const media = projectMedia(project)
  const canExpand = media.length > 1
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const current = media[wrapIndex(index, Math.max(media.length, 1))]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
      if (event.key === "ArrowLeft") setIndex((value) => wrapIndex(value - 1, media.length))
      if (event.key === "ArrowRight") setIndex((value) => wrapIndex(value + 1, media.length))
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, media.length])

  const goPrev = () => setIndex((value) => wrapIndex(value - 1, media.length))
  const goNext = () => setIndex((value) => wrapIndex(value + 1, media.length))

  if (media.length === 0) {
    return (
      <div className={`sticky-note ${tiltClass} sticky-note-fill`}>
        <h3 className="note-title-fill">{project.title}</h3>
      </div>
    )
  }

  return (
    <>
      <div
        className={`sticky-note ${tiltClass}${canExpand ? " sticky-interactive" : ""}`}
        onClick={canExpand ? () => setOpen(true) : undefined}
      >
        <div className="sticky-media">
          {current ? (
            <MediaFrame
              key={`${current.type}-${current.src}-${index}`}
              item={current}
              alt={project.title}
              orientation={orientation}
              playable={!canExpand}
            />
          ) : null}
          {canExpand ? <GalleryArrows onPrev={goPrev} onNext={goNext} /> : null}
        </div>
        <h3 className={titleClassName}>{project.title}</h3>
      </div>

      {mounted && open && canExpand
        ? createPortal(
            <div className="gallery-overlay" onClick={() => setOpen(false)}>
              <div
                className="gallery-note sticky-note sticky-straight"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="sticky-media">
                  {current ? (
                    <MediaFrame
                      key={`modal-${current.type}-${current.src}-${index}`}
                      item={current}
                      alt={project.title}
                      orientation={orientation}
                      playable
                    />
                  ) : null}
                  <GalleryArrows onPrev={goPrev} onNext={goNext} />
                </div>
                <h3 className="note-title note-title-center">{project.title}</h3>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
