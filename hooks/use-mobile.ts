"use client"

import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

/**
 * SSR-safe: always starts `false` so server HTML matches the first client paint.
 * Real breakpoint is applied after mount (avoids React hydration error #418).
 */
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  return isMobile
}

/** Alias for shadcn UI components */
export const useIsMobile = useMobile
