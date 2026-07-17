"use client"

import { motion } from "motion/react"
import { assetPath } from "@/lib/asset-path"

type Position = {
  title: string
  dates: string
}

type WorkEntry = {
  company: string
  image: string
  /** Overall tenure / location line under the company name */
  summary: string
  positions: Position[]
  skills: string[]
}

const entries: WorkEntry[] = [
  {
    company: "Nout Games",
    image: "/images/NoutLogo.png",
    summary: "Nov 2025 – present · Remote",
    positions: [{ title: "Technical Game Designer", dates: "Nov 2025 – present" }],
    skills: ["Unreal Engine", "Game Design", "Technical Design"],
  },
  {
    company: "Hazem Mansour",
    image: "/images/hazem-mansour.jpeg",
    summary: "Apr 2025 – Jun 2026 · Sheikh Zayed, Egypt",
    positions: [{ title: "Unreal Engine Developer", dates: "Apr 2025 – Jun 2026" }],
    skills: ["Unreal Engine", "VR Development", "C++", "Automation", "3ds Max"],
  },
  {
    company: "Serenity Forge",
    image: "/images/serenity-forge.webp",
    summary: "May 2022 – Feb 2023 · Remote",
    positions: [
      { title: "Mid Level Engine Programmer", dates: "Oct 2022 – Feb 2023" },
      { title: "Junior Game Programmer", dates: "May 2022 – Oct 2022" },
    ],
    skills: ["Engine Programming", "Game Programming", "C++", "Game Development", "Game Design"],
  },
  {
    company: "Jana Games Studios",
    image: "/images/jana-games-studios.png",
    summary: "Apr 2022 – Dec 2022 · Remote",
    positions: [{ title: "Unreal Engine Developer", dates: "Apr 2022 – Dec 2022" }],
    skills: ["Unreal Engine", "Game Development", "C++"],
  },
]

function RoleTimeline({ positions }: { positions: Position[] }) {
  if (positions.length === 1) {
    return (
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{positions[0].title}</h3>
    )
  }

  return (
    <ol className="relative mt-1 space-y-5 border-l border-white/15 pl-5 text-left">
      {positions.map((position) => (
        <li key={`${position.title}-${position.dates}`} className="relative">
          <span
            className="absolute left-[-1.4375rem] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-400"
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">{position.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{position.dates}</p>
        </li>
      ))}
    </ol>
  )
}

export function Work() {
  return (
    <section id="work" className="relative border-t border-white/[0.06] bg-[#071127]/40">
      <div className="section-shell">
        <motion.h2
          className="section-title mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          Work
        </motion.h2>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/[0.09] md:left-1/2" aria-hidden="true">
            <motion.div
              className="h-full w-px origin-top bg-electric-300 shadow-[0_0_14px_rgba(56,182,255,.7)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {entries.map((entry, index) => {
              const alignEnd = index % 2 === 0
              return (
                <motion.li
                  key={entry.company}
                  className={`relative grid pl-10 sm:pl-12 md:grid-cols-2 md:pl-0 ${
                    alignEnd ? "md:[&>article]:mr-14" : "md:[&>article]:col-start-2 md:[&>article]:ml-14"
                  }`}
                  initial={{ opacity: 0, y: 32, x: alignEnd ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 130, damping: 22 }}
                >
                  <span className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-electric-300 bg-[#050b1e] shadow-[0_0_14px_rgba(56,182,255,.7)] md:left-1/2 md:-translate-x-1/2" />
                  <article className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-left transition hover:border-electric-400/25 hover:bg-electric-500/[0.04]">
                    <div className="mb-5 flex items-center gap-4">
                      <img
                        src={assetPath(entry.image)}
                        alt={`${entry.company} logo`}
                        className="h-14 w-14 shrink-0 rounded-2xl object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{entry.company}</h3>
                        <p className="mt-1 text-sm text-slate-400">{entry.summary}</p>
                      </div>
                    </div>

                    <RoleTimeline positions={entry.positions} />

                    <div className="mt-5 flex flex-wrap gap-2">
                      {entry.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
