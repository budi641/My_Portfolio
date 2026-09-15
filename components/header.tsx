"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import { navItems } from "@/lib/content"

export function Header() {
  const [open, setOpen] = useState(false)
  const skipRestore = useRef(false)

  useEffect(() => {
    if (!open) return

    const y = window.scrollY
    const { body } = document
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      overflow: body.style.overflow,
    }

    body.style.position = "fixed"
    body.style.top = `-${y}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.overflow = "hidden"

    return () => {
      body.style.position = previous.position
      body.style.top = previous.top
      body.style.left = previous.left
      body.style.right = previous.right
      body.style.overflow = previous.overflow
      if (skipRestore.current) {
        skipRestore.current = false
        return
      }
      window.scrollTo(0, y)
    }
  }, [open])

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50">
        <nav
          className="page-x flex w-full items-end justify-between"
          style={{ height: "var(--header-h)" }}
          aria-label="Primary"
        >
          <a
            href="#home"
            className="flex h-11 w-11 items-center justify-center"
            onClick={() => {
              skipRestore.current = true
              setOpen(false)
            }}
            aria-label="Go to Home"
          >
            <img src={assetPath("/images/joystick.png")} alt="" className="h-11 w-11 object-contain" />
          </a>

          <div className="hidden items-end gap-6 lg:flex lg:gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-[1.625rem] leading-[var(--line)] text-mute">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </nav>

        {open ? (
          <nav
            className="page-x max-h-[calc(100dvh-var(--header-h))] overflow-y-auto py-[var(--line)] lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    skipRestore.current = true
                    setOpen(false)
                  }}
                  className="nav-link py-[var(--line)] text-[1.75rem] leading-[var(--line)] text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <div style={{ height: "var(--header-h)" }} aria-hidden />
    </>
  )
}
