"use client"

import { Canvas } from "@react-three/fiber"
import { Github, Linkedin, ArrowDownRight } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { HeroRobot } from "./hero-robot"
import { useGitHubProfile } from "@/hooks/useGitHubProfile"
import { Suspense } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { assetPath } from "@/lib/asset-path"
import { motion, useReducedMotion } from "motion/react"

function RobotCanvas({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      className="!h-full !w-full"
      dpr={isMobile ? [1, 1.25] : [1, 1.6]}
      shadows={!isMobile}
      camera={{ position: [0, isMobile ? -0.05 : 0.15, isMobile ? 4.2 : 3.6], fov: isMobile ? 36 : 36 }}
      gl={{ alpha: true, antialias: !isMobile, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isMobile ? 0.45 : 0.32} color="#b9dfff" />
        <directionalLight position={[-2.5, 4, 3]} intensity={isMobile ? 2.6 : 2.2} color="#dcefff" castShadow={!isMobile} />
        <pointLight position={[2, 1, -1.5]} intensity={5} color="#0055bb" distance={6} />
        <HeroRobot isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export function Hero() {
  const { profile } = useGitHubProfile("budi641")
  const isMobile = useMobile()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className={`relative min-h-[100svh] px-4 pb-10 sm:px-8 sm:pb-12 lg:px-12 ${
        isMobile
          ? "overflow-x-hidden overflow-y-visible pt-20"
          : "overflow-hidden pt-24 sm:pt-28"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${assetPath("/images/NewHeroBG.webp")}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
      />
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-[linear-gradient(100deg,rgba(5,11,30,.97)_4%,rgba(5,11,30,.78)_45%,rgba(5,11,30,.35)_75%,rgba(5,11,30,.78)_100%)]"
            : "bg-[linear-gradient(100deg,rgba(5,11,30,.97)_0%,rgba(5,11,30,.92)_38%,rgba(5,11,30,.45)_68%,rgba(5,11,30,.55)_100%)]"
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050b1e] to-transparent" />

      {!isMobile && (
        <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
          <Canvas
            dpr={[1, 1.35]}
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          >
            <Suspense fallback={null}>
              <ParallaxBackground />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Desktop: full-bleed stage behind copy */}
      {!isMobile && (
        <div className="absolute inset-0 z-[2] touch-manipulation">
          <motion.div
            className="h-full w-full"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.2 }}
          >
            <div
              className="pointer-events-none absolute inset-x-[35%] left-[45%] bottom-[8%] h-16 rounded-full bg-electric-500/[0.06] blur-3xl"
              aria-hidden="true"
            />
            <RobotCanvas isMobile={false} />
          </motion.div>
        </div>
      )}

      <div
        className={`pointer-events-none relative z-10 mx-auto flex max-w-[1500px] flex-col ${
          isMobile
            ? "justify-start gap-0"
            : "min-h-[calc(100svh-6rem)] items-start justify-end lg:min-h-[calc(100svh-8rem)]"
        }`}
      >
        {/* Mobile: robot sits directly above the first name, pinned toward the top */}
        {isMobile && (
          <motion.div
            className="relative z-[2] -mb-6 h-[280px] w-full shrink-0 overflow-visible touch-manipulation sm:h-[300px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 20, delay: 0.18 }}
          >
            <div
              className="pointer-events-none absolute inset-x-10 bottom-2 h-8 rounded-full bg-electric-500/[0.08] blur-2xl"
              aria-hidden="true"
            />
            <RobotCanvas isMobile />
          </motion.div>
        )}

        <motion.div
          className={`pointer-events-auto pb-2 ${
            isMobile ? "max-w-3xl" : "max-w-[min(36rem,52%)] lg:max-w-[34rem]"
          }`}
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.15 }}
        >
          <h1 className="text-balance text-[clamp(2.6rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.065em] text-soft-white">
            Abdelrahman
            <span className="block text-electric-300">Ameen</span>
          </h1>
          <h2 className="mt-4 text-base font-medium tracking-tight text-white/90 sm:mt-6 sm:text-xl md:text-2xl">
            Technical Game Designer & Graphics Programmer
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base md:text-lg">
            I design gameplay systems and build graphics tooling for real-time applications. My work spans Unreal
            Engine, C++, and Vulkan across shipped titles, custom engines, and rendering research.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <motion.button
                whileHover={reduceMotion || isMobile ? undefined : { scale: 1.04, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="btn-pill"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View my work
                <ArrowDownRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={reduceMotion || isMobile ? undefined : { scale: 1.04, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="btn-pill-ghost"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in touch
              </motion.button>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={profile?.html_url || "https://github.com/budi641"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-300 transition hover:border-electric-300 hover:text-electric-200"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahmanameen/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-300 transition hover:border-electric-300 hover:text-electric-200"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
