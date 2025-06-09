"use client"

import { Button } from "@/components/ui/button"
import {
  SiUnrealengine,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiOpengl,
  SiReact,
  SiGit,
  SiGithub,
  SiPython,
  SiVulkan,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"

const skillsData = [
  { id: 1, name: "Unreal Engine", icon: <SiUnrealengine size={48} /> },
  { id: 2, name: "C++", icon: <SiCplusplus size={48} /> },
  { id: 3, name: "C", icon: <SiC size={48} /> },
  { id: 4, name: "C#", icon: <TbBrandCSharp size={48} /> },
  { id: 5, name: "Java", icon: <FaJava size={48} /> },
  { id: 6, name: "Python", icon: <SiPython size={48} /> },
  { id: 7, name: "JavaScript", icon: <SiJavascript size={48} /> },
  { id: 8, name: "OpenGL", icon: <SiOpengl size={48} /> },
  { id: 9, name: "React", icon: <SiReact size={48} /> },
  { id: 10, name: "Vulkan", icon: <SiVulkan size={48} /> },
  { id: 11, name: "Git", icon: <SiGit size={48} /> },
  { id: 12, name: "GitHub", icon: <SiGithub size={48} /> },
]

export function Skills() {
  const resumeUrl = "https://drive.google.com/file/d/1iAOxp6L1LT2DlaTYNEFMdxYRUWTZws8i/view?usp=sharing"

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              className="group relative bg-gradient-to-br from-slate-800/30 via-purple-900/20 to-slate-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:transform hover:scale-105 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mb-2">
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center group-hover:text-gray-200 transition-colors duration-300">
                {skill.name}
              </span>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            onClick={() => window.open(resumeUrl, "_blank")}
          >
            RESUME
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
