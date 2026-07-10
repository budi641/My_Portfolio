"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Cpu, Zap } from "lucide-react"
import { useGitHubProfile } from "@/hooks/useGitHubProfile"
import { useMobile } from "@/hooks/use-mobile"
import { assetPath } from "@/lib/asset-path"

export function About() {
  const { profile } = useGitHubProfile("budi641")
  const isMobile = useMobile()

  const highlights = [
    {
      icon: <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Game Development",
      description: "Gameplay systems, physics, AI, and interactive mechanics in production and prototype environments.",
    },
    {
      icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      title: "Graphics Programming",
      description: "Real-time rendering, shaders, and performance-focused graphics pipelines.",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />,
      title: "Technical Stack",
      description: "C++, Python, Vulkan, and Unreal Engine for engine work, tools, and shipped features.",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />,
      title: "VR & Simulation",
      description: "Immersive training and interactive applications built for practical use cases.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6">
              My Journey
            </h3>
            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <p>
                I am a technical game designer and graphics programmer working across gameplay systems, engine
                development, and real-time rendering. I build in Unreal Engine and C++, and I am equally comfortable
                prototyping mechanics, shipping production features, and working close to the graphics stack.
              </p>
              <p>
                My background includes shipped multiplayer work, custom engine development, VR training tools, and
                graphics research with Vulkan ray tracing. I focus on systems that are clear to design, stable in
                production, and straightforward to extend.
              </p>
              <p>
                I work best where design and implementation meet: defining how a feature should behave, building the
                systems behind it, and refining performance until the result holds up in real use.
              </p>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={profile?.avatar_url || assetPath("/placeholder.svg")}
                alt="Profile"
                className={`relative rounded-full border-4 border-gradient-to-r from-blue-500 to-violet-500 object-cover ${
                  isMobile ? "w-48 h-48" : "w-64 h-64 md:w-72 md:h-72"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 border-purple-500/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="mb-3 md:mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
