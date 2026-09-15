"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import { navItems } from "@/lib/content"

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="site-header sticky top-0 z-50">
      <nav
        className="page-x flex w-full items-end justify-between"
        style={{ height: "var(--header-h)" }}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex h-11 w-11 items-center justify-center"
          onClick={() => setOpen(false)}
          aria-label="Go to Home"
        >
          <img src={assetPath("/images/joystick.png")} alt="" className="h-11 w-11 object-contain" />
        </a>

        <div className="hidden items-end gap-6 lg:gap-8 xl:gap-10 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-[1.625rem] leading-[var(--line)] text-mute">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </nav>

      {open && (
        <nav className="page-x bg-paper py-[var(--line)] md:hidden" aria-label="Mobile">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link py-[var(--line)] text-[1.75rem] leading-[var(--line)] text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
