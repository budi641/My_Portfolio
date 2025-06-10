"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Work() {
  const workData = [
    {
      position: "Unreal Engine Developer",
      company: "Hazem Mansour",
      dateLocation: "Apr 2025 – present | Shiekh Zayed, Egypt",
      description: [],
      skills: ["Unreal Engine", "VR Development", "C++", "Automation", "3ds Max"],
      image: "/images/hazem-mansour.jpeg",
    },
    {
      company: "Serenity Forge",
      image: "/images/serenity-forge.webp",
      roles: [
        {
          position: "Mid Level Engine Programmer",
          dateLocation: "Oct 2022 – Feb 2023 | Remote",
          description: [],
          skills: ["Engine Programming", "C++", "Game Development"],
        },
        {
          position: "Junior Game Programmer",
          dateLocation: "May 2022 – Oct 2022 | Remote",
          description: [],
          skills: ["Game Programming", "C++", "Game Design"],
        },
      ],
    },
    {
      position: "Unreal Engine Developer",
      company: "Jana Games Studios",
      dateLocation: "Apr 2022 – Dec 2022 | Remote",
      description: [],
      skills: ["Unreal Engine", "Game Development", "C++"],
      image: "/images/jana-games-studios.png",
    },
  ]

  return (
    <section id="work" className="py-20 px-6 bg-gradient-to-br from-navy-950/60 via-navy-900/40 to-violet-950/60">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workData.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-navy-900/40 via-navy-800/30 to-violet-900/40 backdrop-blur-xl border-navy-700/30 hover:border-electric-500/50 transition-all duration-500 hover:transform hover:translateY(-2px) glow-effect"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "slideInLeft 0.8s ease-out forwards",
                opacity: 0,
                transform: "translateX(-50px)",
              }}
            >
              <CardContent className="p-8">
                {item.roles ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={item.image ? `/My_Portfolio${item.image.startsWith('/') ? item.image : `/${item.image}`}` : '/My_Portfolio/placeholder.svg'}
                          alt={`${item.company} Logo`}
                          className="w-20 h-12 rounded-lg object-contain bg-transparent"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 to-violet-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-electric-400 to-violet-400 bg-clip-text text-transparent">
                        {item.company}
                      </h3>
                    </div>

                    {item.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="border-l-2 border-electric-500/30 pl-6 mb-6 last:mb-0">
                        <h4 className="text-lg font-semibold text-gray-200 mb-2">{role.position}</h4>
                        <p className="text-sm text-gray-400 mb-4">{role.dateLocation}</p>

                        {role.skills && role.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="bg-gradient-to-r from-electric-500/20 to-violet-500/20 text-electric-300 border-electric-500/30 hover:from-electric-500/30 hover:to-violet-500/30 transition-all duration-300"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={item.image ? `/My_Portfolio${item.image.startsWith('/') ? item.image : `/${item.image}`}` : '/My_Portfolio/placeholder.svg'}
                          alt={`${item.company} Logo`}
                          className="w-16 h-16 rounded-lg object-contain bg-transparent"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 to-violet-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-electric-400 to-violet-400 bg-clip-text text-transparent">
                          {item.position}
                        </h3>
                        <h4 className="text-lg text-gray-200">{item.company}</h4>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-4">{item.dateLocation}</p>

                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-gradient-to-r from-electric-500/20 to-violet-500/20 text-electric-300 border-electric-500/30 hover:from-electric-500/30 hover:to-violet-500/30 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
