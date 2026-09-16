import { assetPath } from "@/lib/asset-path"
import { content } from "@/lib/content"

function cleanTitle(title: string) {
  return title.replace(/\s*\(unannounced\)/gi, "").replace(/\n/g, " ").trim()
}

const sameAs = content.about.links
  .map((link) => link.url)
  .filter((url) => url.startsWith("http"))

export const projectNames = content.sections.flatMap((section) =>
  section.projects.map((project) => cleanTitle(project.title)).filter(Boolean),
)

export const techNames = Array.from(
  new Set(content.sections.flatMap((section) => section.projects.flatMap((project) => project.technologies))),
)

export const seo = {
  title: `${content.site.name} | Technical Game Designer and Game Developer`,
  description:
    "Games, Unreal work, graphics, VR, tools, and software by Abdelrahman Ameen. Technical game designer and developer.",
  keywords: [
    content.site.name,
    "Abdelrahman Ameen",
    "Ameen",
    "budi641",
    "technical game designer",
    "game designer",
    "game developer",
    "Arab game developer",
    "Arab game designer",
    "Arab technical game designer",
    "game development in Egypt",
    "Egyptian game developer",
    "software engineer",
    "software developer",
    "graphics programmer",
    "Unreal Engine",
    "Unreal Engine developer",
    "C++",
    "Vulkan",
    "VR developer",
    "interactive media",
    "portfolio",
    ...content.sections.map((section) => section.title),
    ...projectNames,
    ...techNames,
  ],
  ogImage: assetPath(content.home.photo || content.about.image),
  sameAs,
}

export function jsonLd() {
  const pageUrl = content.site.url.replace(/\/$/, "")
  const image = `${pageUrl}${seo.ogImage.startsWith("/") ? seo.ogImage : `/${seo.ogImage}`}`
  const email = content.about.links.find((link) => link.label === "Email")?.url.replace(/^mailto:/, "")

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        url: `${pageUrl}/`,
        name: content.site.name,
        description: seo.description,
        inLanguage: "en",
        publisher: { "@id": `${pageUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${pageUrl}/#person`,
        name: content.site.name,
        url: `${pageUrl}/`,
        image,
        email,
        jobTitle: [
          "Technical Game Designer",
          "Game Designer",
          "Game Developer",
          "Software Engineer",
          "Graphics Programmer",
        ],
        description: content.home.text,
        nationality: "Egyptian",
        address: {
          "@type": "PostalAddress",
          addressCountry: "EG",
        },
        knowsAbout: [
          "Game development",
          "Game design",
          "Unreal Engine",
          "Graphics programming",
          "Software engineering",
          ...techNames.slice(0, 24),
        ],
        sameAs: seo.sameAs,
        hasOccupation: {
          "@type": "Occupation",
          name: "Technical Game Designer",
          occupationLocation: {
            "@type": "Country",
            name: "Egypt",
          },
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}/#profile`,
        url: `${pageUrl}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: "en",
        isPartOf: { "@id": `${pageUrl}/#website` },
        about: { "@id": `${pageUrl}/#person` },
        mainEntity: { "@id": `${pageUrl}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#projects`,
        name: `${content.site.name} projects`,
        itemListElement: content.sections.flatMap((section) =>
          section.projects.map((project) => ({ project, sectionId: section.id })),
        ).map(({ project, sectionId }, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: cleanTitle(project.title),
            description: project.shortDescription || project.fullDescription,
            url: project.links.find((link) => link.url.startsWith("http"))?.url || `${pageUrl}/#${sectionId}`,
            keywords: project.technologies.join(", "),
            author: { "@id": `${pageUrl}/#person` },
          },
        })),
      },
    ],
  }
}
