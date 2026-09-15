import portfolio from "@/content/portfolio.json"

export type SiteLink = {
  label: string
  text: string
  url: string
}

export type ProjectLink = {
  type: string
  url: string
}

export type MediaOrientation = "landscape" | "portrait"

export type ProjectMedia = {
  type: "image" | "video"
  src: string
  poster?: string
}

export type Project = {
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  video: string
  media?: ProjectMedia[]
  orientation?: MediaOrientation
  technologies: string[]
  links: ProjectLink[]
}

export function projectMedia(project: Project): ProjectMedia[] {
  if (project.media?.length) {
    const items = project.media.filter((item) => item.src.trim())
    const stills = new Set(items.filter((item) => item.type === "image").map((item) => item.src.trim()))

    return items.map((item) => {
      if (item.type === "video" && item.poster && stills.has(item.poster.trim())) {
        return { type: "video", src: item.src }
      }
      return item
    })
  }

  const image = project.image.trim()
  const video = project.video.trim()

  if (video) {
    return [{ type: "video", src: video, poster: image || undefined }]
  }

  if (image) {
    return [{ type: "image", src: image }]
  }

  return []
}

export type SectionLayout = "grid" | "showcase"

export type PortfolioSection = {
  id: string
  title: string
  layout?: SectionLayout
  projects: Project[]
}

export type PortfolioContent = {
  site: {
    name: string
    url: string
  }
  home: {
    name: string
    text: string
    photo: string
  }
  about: {
    id: string
    title: string
    paragraph: string
    image: string
    links: SiteLink[]
  }
  sections: PortfolioSection[]
}

export const content = portfolio as PortfolioContent

export const navItems = [
  { href: `#${content.about.id}`, label: content.about.title },
  ...content.sections.map((section) => ({
    href: `#${section.id}`,
    label: section.title,
  })),
]
