"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

function getIsMobile() {
  if (typeof window === "undefined") return false
  return window.innerWidth < MOBILE_BREAKPOINT
}

export function useMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => setIsMobile(media.matches)
    onChange()
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

/** Alias for shadcn sidebar and other components that expect this name. */
export const useIsMobile = useMobile
