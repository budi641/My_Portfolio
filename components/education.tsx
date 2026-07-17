"use client"

import { assetPath } from "@/lib/asset-path"
import { motion } from "motion/react"

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Software Development",
      school: "Computational Science and AI at university of science and technology, Zewail city",
      date: "Oct 2022 – Jun 2026",
      description: "Concentration: Gaming and Computer Graphics",
      image: "/images/zewail-city.png",
      courses: ["Computational Science", "Artificial Intelligence", "Game Development", "Computer Graphics"],
    },
  ]

  return (
    <section id="education" className="relative border-t border-white/[0.06]">
      <div className="section-shell">
        <motion.h2
          className="section-title mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          Education
        </motion.h2>
        <div className="relative max-w-5xl border-l border-electric-400/40 pl-7 sm:pl-12">
          <div className="absolute -left-px top-0 h-24 w-px bg-electric-300 shadow-[0_0_16px_rgba(56,182,255,.8)]" />
          {educationData.map((edu, index) => (
            <motion.article
              key={index}
              className="grid gap-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:grid-cols-[auto_1fr]"
              initial={{ opacity: 0, x: -28, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              whileHover={{ y: -4 }}
            >
              <img
                src={edu.image ? assetPath(edu.image) : assetPath("/placeholder.svg")}
                alt=""
                className="h-20 w-20 rounded-xl object-contain"
              />
              <div>
                <p className="mb-4 text-sm text-slate-400">{edu.date}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl md:text-5xl">{edu.degree}</h3>
                <h4 className="mt-3 max-w-3xl text-base text-slate-300 sm:mt-4 sm:text-lg">{edu.school}</h4>
                <p className="mt-6 text-electric-200">{edu.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {edu.courses.map((course) => (
                    <span key={course} className="chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
