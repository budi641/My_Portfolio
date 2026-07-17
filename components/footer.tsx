"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { assetPath } from "@/lib/asset-path"

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030713] px-5 py-10 sm:px-8 lg:px-12">
      <div className="scanline absolute inset-x-0 top-0 opacity-50" />
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <button
            onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
            className="transition hover:scale-105"
            aria-label="Back to top"
          >
            <img src={assetPath("/tabicon.svg")} alt="" className="h-9 w-9" />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-400">
          <a href="mailto:aameendev@gmail.com" className="transition-colors hover:text-electric-300">
            Email
          </a>
          <a href="https://github.com/budi641" target="_blank" rel="noreferrer" className="transition-colors hover:text-electric-300">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahmanameen/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-electric-300"
          >
            LinkedIn
          </a>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-1 transition-colors hover:text-electric-300"
          >
            Back to top <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1500px] border-t border-white/[0.06] pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
        © {new Date().getFullYear()} Abdelrahman Ameen · Designed and built by me
      </div>
    </footer>
  )
}
