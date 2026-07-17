"use client"

import { ArrowUpRight } from "lucide-react"
import {
  SiUnrealengine,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiOpengl,
  SiReact,
  SiGit,
  SiGithub,
  SiPython,
  SiVulkan,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"
import { motion } from "motion/react"
import { useAtmosphere } from "@/lib/atmosphere"

/** Letter-mark logos already spell the name — hide the text label so it doesn't read as "C C" / "C# C#". */
const skillsData = [
  { id: 1, name: "Unreal Engine", icon: <SiUnrealengine size={48} /> },
  { id: 2, name: "C++", icon: <SiCplusplus size={48} />, iconIsLabel: true },
  { id: 3, name: "C", icon: <SiC size={48} />, iconIsLabel: true },
  { id: 4, name: "C#", icon: <TbBrandCSharp size={48} />, iconIsLabel: true },
  { id: 5, name: "Java", icon: <FaJava size={48} /> },
  { id: 6, name: "Python", icon: <SiPython size={48} /> },
  { id: 7, name: "JavaScript", icon: <SiJavascript size={48} /> },
  { id: 8, name: "OpenGL", icon: <SiOpengl size={48} /> },
  { id: 9, name: "React", icon: <SiReact size={48} /> },
  { id: 10, name: "Vulkan", icon: <SiVulkan size={48} /> },
  { id: 11, name: "Git", icon: <SiGit size={48} /> },
  { id: 12, name: "GitHub", icon: <SiGithub size={48} /> },
]

export function Skills() {
  const resumeUrl = "https://drive.google.com/file/d/1iAOxp6L1LT2DlaTYNEFMdxYRUWTZws8i/view?usp=sharing"
  const pulse = useAtmosphere((state) => state.pulse)
  const skillByName = new Map(skillsData.map((skill) => [skill.name, skill]))
  const groups = [
    { label: "Engines & Gameplay", names: ["Unreal Engine", "C++"] },
    { label: "Graphics & Rendering", names: ["Vulkan", "OpenGL"] },
    { label: "Systems & Languages", names: ["C", "C#", "Java", "Python", "JavaScript"] },
    { label: "Tools & Web", names: ["Git", "GitHub", "React"] },
  ].map((group) => ({
    ...group,
    skills: group.names.map((name) => skillByName.get(name)!),
  }))

  return (
    <section id="skills" className="relative border-t border-white/[0.06] bg-[#071127]/50">
      <div className="section-shell">
        <motion.h2
          className="section-title mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-3">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              className="grid gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 transition hover:border-electric-400/30 hover:bg-electric-500/[0.04] sm:gap-6 sm:px-5 sm:py-7 lg:grid-cols-[.7fr_1.3fr] lg:items-center"
              onMouseEnter={pulse}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ type: "spring", stiffness: 150, damping: 24, delay: groupIndex * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{group.label}</h3>
              <div className="flex flex-wrap gap-x-7 gap-y-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={`${group.label}-${skill.name}`}
                    className="flex items-center gap-3 text-slate-300"
                    whileHover={{ scale: 1.06, color: "#dceeff" }}
                    aria-label={skill.name}
                    title={skill.name}
                  >
                    <span className="text-electric-300 [&_svg]:h-8 [&_svg]:w-8">{skill.icon}</span>
                    {!skill.iconIsLabel && (
                      <span className="text-base font-medium sm:text-lg">{skill.name}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-pill mt-12"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          View resume <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  )
}
