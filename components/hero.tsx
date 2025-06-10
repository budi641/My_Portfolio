"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { Custom3DModel } from "./custom-3d-model"
import { ParallaxBackground } from "./parallax-background"
import { useGitHubProfile } from "@/hooks/useGitHubProfile"
import { useState, useEffect, Suspense } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function Hero() {
  const { profile } = useGitHubProfile("budi641")
  const [scrollY, setScrollY] = useState(0)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden py-16 md:py-0"
    >
      {/* Enhanced Background with deeper gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/My_Portfolio/images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-violet-950/90"></div>
      </div>

      {/* Enhanced 3D Space Background */}
      <div className="absolute inset-0 z-1">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ParallaxBackground />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              <span className="block text-gray-200 mb-1 md:mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 bg-clip-text text-transparent relative inline-block">
                Abdelrahman Ameen
                <div
                  className="absolute inset-0 bg-gradient-to-r from-electric-400/15 via-violet-400/15 to-electric-500/15 blur-2xl -z-10 animate-pulse scale-110"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-electric-400/10 via-violet-400/10 to-electric-500/10 blur-3xl -z-10 animate-pulse scale-125"
                  style={{ animationDuration: "6s" }}
                ></div>
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-electric-300 to-violet-300 bg-clip-text text-transparent mb-4 md:mb-6 font-semibold">
              Gameplay & Graphics Programmer
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {profile?.bio ||
                "Passionate about creating immersive gaming experiences through innovative gameplay mechanics and cutting-edge graphics programming. Specializing in Unreal Engine and VR development with modern rendering techniques."}
            </p>

            {/* Enhanced Social Links - Removed Email Button */}
            <div className="flex justify-center md:justify-start space-x-4 mb-6 md:mb-8">
              <Button
                variant="outline"
                size="icon"
                className="border-electric-500/50 text-electric-400 hover:bg-gradient-to-r hover:from-electric-500 hover:to-violet-500 hover:text-gray-100 transition-all duration-500 hover:scale-110 glow-effect bg-navy-900/50 backdrop-blur-sm"
                onClick={() => window.open(profile?.html_url || "https://github.com/budi641", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-violet-500/50 text-violet-400 hover:bg-gradient-to-r hover:from-violet-500 hover:to-electric-500 hover:text-gray-100 transition-all duration-500 hover:scale-110 glow-effect bg-navy-900/50 backdrop-blur-sm"
                onClick={() => window.open("https://www.linkedin.com/in/abdelrahmanameen/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-electric-500 via-violet-500 to-electric-600 hover:from-electric-600 hover:via-violet-600 hover:to-electric-700 transition-all duration-500 hover:scale-105 glow-effect text-gray-100 font-semibold shadow-2xl"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-electric-500/50 text-electric-400 hover:bg-gradient-to-r hover:from-electric-500/20 hover:to-violet-500/20 hover:text-gray-200 transition-all duration-500 hover:scale-105 bg-navy-900/50 backdrop-blur-sm"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Your Custom 3D Model */}
          <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-violet-500/10 to-electric-500/10 rounded-full blur-3xl animate-pulse"></div>
            <Canvas camera={{ position: [0, 0, isMobile ? 10 : 8] }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#0087ff" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#8719ff" />
              <spotLight position={[0, 10, 5]} intensity={2} color="#0087ff" angle={0.3} />
              <spotLight position={[5, -5, 5]} intensity={1.5} color="#8719ff" angle={0.4} />
              <Environment preset="night" />

              <Suspense
                fallback={
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#0087ff" wireframe />
                  </mesh>
                }
              >
                <Custom3DModel scrollY={scrollY} isMobile={isMobile} />
              </Suspense>

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
