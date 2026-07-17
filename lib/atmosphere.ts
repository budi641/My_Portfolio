"use client"

import { create } from "zustand"

export type SectionName =
  | "home"
  | "about"
  | "skills"
  | "education"
  | "work"
  | "projects"
  | "contact"

export type RobotState = "idle" | "angry" | "projects" | "powered-down" | "confirm"

interface AtmosphereState {
  activeSection: SectionName
  energy: number
  accent: string
  robotState: RobotState
  eventVersion: number
  setSection: (section: SectionName) => void
  setRobotState: (state: RobotState) => void
  pulse: () => void
}

const sectionSettings: Record<SectionName, Pick<AtmosphereState, "energy" | "accent" | "robotState">> = {
  home: { energy: 0.72, accent: "#38b6ff", robotState: "idle" },
  about: { energy: 0.35, accent: "#208cff", robotState: "idle" },
  skills: { energy: 0.48, accent: "#38b6ff", robotState: "idle" },
  education: { energy: 0.28, accent: "#208cff", robotState: "idle" },
  work: { energy: 0.36, accent: "#2b7fff", robotState: "idle" },
  projects: { energy: 0.62, accent: "#4169e1", robotState: "projects" },
  contact: { energy: 0.12, accent: "#164c8c", robotState: "powered-down" },
}

export const useAtmosphere = create<AtmosphereState>((set) => ({
  activeSection: "home",
  ...sectionSettings.home,
  eventVersion: 0,
  setSection: (activeSection) =>
    set((state) => {
      const next = sectionSettings[activeSection]
      // Keep short-lived interactive faces (angry / confirm) until their timers clear.
      const keepFace = state.robotState === "angry" || state.robotState === "confirm"
      return {
        activeSection,
        energy: next.energy,
        accent: next.accent,
        robotState: keepFace ? state.robotState : next.robotState,
      }
    }),
  setRobotState: (robotState) => set({ robotState }),
  pulse: () => set((state) => ({ eventVersion: state.eventVersion + 1 })),
}))
