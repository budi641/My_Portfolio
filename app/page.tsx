"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Work />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}
