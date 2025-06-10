"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Cpu, Zap } from "lucide-react"
import { useGitHubProfile } from "@/hooks/useGitHubProfile"
import { useMobile } from "@/hooks/use-mobile"

export function About() {
  const { profile } = useGitHubProfile("budi641")
  const isMobile = useMobile()

  const highlights = [
    {
      icon: <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Game Development",
      description: "Expert in gameplay mechanics, physics simulation, and interactive systems development",
    },
    {
      icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      title: "Graphics Programming",
      description: "Specialized in real-time rendering, visual effects, and high-performance graphics systems",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />,
      title: "Technical Expertise",
      description: "Proficient in C++, Python, Vulkan, and Unreal Engine development",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />,
      title: "VR & Innovation",
      description: "Pioneering immersive VR experiences and cutting-edge interactive technologies",
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
                I'm a passionate game developer and graphics programmer with a focus on real-time rendering, physics
                simulation, and interaction systems. I specialize in Unreal Engine and enjoy building immersive,
                high-performance experiences using C++, Python, and Vulkan.
              </p>
              <p>
                I love solving complex problems and turning creative ideas into interactive systems. Whether it's
                gameplay mechanics, custom engines, or visual effects, I bring innovation, dedication, and technical
                skill to every project. My expertise extends into virtual reality development, where I create
                groundbreaking immersive experiences that push the boundaries of what's possible.
              </p>
              <p>
                With a strong foundation in low-level graphics programming and engine architecture, I excel at
                optimizing performance-critical systems and developing cutting-edge rendering techniques. My work spans
                from indie game development to enterprise VR solutions, always maintaining a focus on delivering
                exceptional user experiences through technical excellence.
              </p>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={profile?.avatar_url || `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.svg?height=300&width=300`}
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
