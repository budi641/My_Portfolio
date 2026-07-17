"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useAtmosphere } from "@/lib/atmosphere"
import { assetPath } from "@/lib/asset-path"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeSection = useAtmosphere((state) => state.activeSection)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-white/[0.08] bg-[#050b1e]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-electric-400 shadow-[0_0_12px_rgba(56,182,255,.8)]"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
      <nav className="mx-auto max-w-[1500px] px-4 py-4 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:scale-105 hover:opacity-90"
            aria-label="Go to Home"
          >
            <img src={assetPath("/tabicon.svg")} alt="" className="h-8 w-8" />
          </button>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative min-h-11 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-0 bottom-1 h-px bg-electric-300 shadow-[0_0_10px_rgba(56,182,255,.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
              </button>
              )
            })}
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center text-slate-200 transition-colors hover:text-electric-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-[#050b1e]/98 px-4 py-8 backdrop-blur-xl sm:px-5 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex max-w-[1500px] flex-col">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="border-b border-white/[0.08] py-4 text-left font-display text-[clamp(2rem,9vw,4rem)] font-semibold tracking-[-0.05em] text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045, type: "spring", stiffness: 220, damping: 25 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
