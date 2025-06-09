"use client"

import { useState, useEffect } from "react"
import { Menu, X, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled || isMobileMenuOpen
          ? "bg-gradient-to-r from-navy-950/95 via-navy-900/95 to-navy-950/95 backdrop-blur-2xl border-b border-gradient-to-r from-electric-500/30 via-violet-500/30 to-electric-500/30 shadow-2xl shadow-electric-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-gray-100 transition-all duration-500 group-hover:text-electric-400 group-hover:scale-110" />
              <div className="absolute inset-0 bg-electric-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-electric-400 hover:to-violet-400 hover:bg-clip-text transition-all duration-500 font-medium group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInDown 0.8s ease-out forwards",
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 transition-all duration-500 group-hover:w-full"></span>
                <div className="absolute inset-0 bg-electric-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-electric-400 hover:bg-electric-500/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-500 ${
                  isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-500 ${
                  isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 py-4 bg-gradient-to-r from-navy-900/95 via-navy-800/95 to-navy-900/95 backdrop-blur-2xl rounded-xl border border-electric-500/20 shadow-2xl shadow-electric-500/10">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-electric-400 hover:to-violet-400 hover:bg-clip-text hover:bg-electric-500/10 transition-all duration-500 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
