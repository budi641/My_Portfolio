"use client"

import { Code, Gamepad2, Cpu, Zap } from "lucide-react"
import { useGitHubProfile } from "@/hooks/useGitHubProfile"
import { assetPath } from "@/lib/asset-path"
import { motion } from "motion/react"

export function About() {
  const { profile } = useGitHubProfile("budi641")
  const highlights = [
    {
      icon: <Gamepad2 className="h-5 w-5" />,
      title: "Game Development",
      description: "Gameplay systems, physics, AI, and interactive mechanics in production and prototype environments.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Graphics Programming",
      description: "Real-time rendering, shaders, and performance-focused graphics pipelines.",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Technical Stack",
      description: "C++, Python, Vulkan, and Unreal Engine for engine work, tools, and shipped features.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "VR & Simulation",
      description: "Immersive training and interactive applications built for practical use cases.",
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="section-shell">
        <motion.h2
          className="section-title mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          About
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 130, damping: 24 }}
          >
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-2xl">
              <img
                src={profile?.avatar_url || assetPath("/placeholder.svg")}
                alt="Abdelrahman Ameen"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050b1e]/85 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="max-w-2xl space-y-4 text-sm leading-relaxed text-slate-300 sm:space-y-5 sm:text-base md:text-lg"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 130, damping: 24, delay: 0.08 }}
          >
            <p>
              I am a technical game designer and graphics programmer working across gameplay systems, engine
              development, and real-time rendering. I build in Unreal Engine and C++, and I am equally comfortable
              prototyping mechanics, shipping production features, and working close to the graphics stack.
            </p>
            <p>
              My background includes shipped multiplayer work, custom engine development, VR training tools, and
              graphics research with Vulkan ray tracing. I focus on systems that are clear to design, stable in
              production, and straightforward to extend.
            </p>
            <p>
              I work best where design and implementation meet: defining how a feature should behave, building the
              systems behind it, and refining performance until the result holds up in real use.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 space-y-2 sm:mt-20 sm:space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group grid gap-4 rounded-2xl border border-transparent px-4 py-6 transition hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[3rem_1fr_1.4fr] sm:items-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 160, damping: 24, delay: index * 0.05 }}
              whileHover={{ x: 6 }}
            >
              <span className="text-electric-300 transition-transform group-hover:scale-110">{item.icon}</span>
              <h4 className="font-display text-xl font-semibold text-white md:text-2xl">{item.title}</h4>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
