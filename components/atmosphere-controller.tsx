"use client"

import { useEffect } from "react"
import { useAtmosphere, type SectionName } from "@/lib/atmosphere"

const sections: SectionName[] = ["home", "about", "skills", "education", "work", "projects", "contact"]

export function AtmosphereController() {
  const setSection = useAtmosphere((state) => state.setSection)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setSection(visible.target.id as SectionName)
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.35, 0.6] },
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [setSection])

  return null
}
