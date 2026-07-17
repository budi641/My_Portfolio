"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MotionConfig } from "motion/react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ParticleBackground } from "@/components/particle-background"
import { AtmosphereController } from "@/components/atmosphere-controller"
import { Footer } from "@/components/footer"
import { useMobile } from "@/hooks/use-mobile"

export default function Portfolio() {
  const isMobile = useMobile()

  return (
    <MotionConfig reducedMotion="user">
    <div className="relative min-h-screen overflow-x-hidden bg-[#050b1e]">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-electric-400 px-4 py-2 font-semibold text-midnight transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <AtmosphereController />
      {/* Lighter particle field on mobile */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Canvas
          className="!h-full !w-full"
          dpr={isMobile ? [1, 1.1] : [1, 1.35]}
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Work />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </MotionConfig>
  )
}
