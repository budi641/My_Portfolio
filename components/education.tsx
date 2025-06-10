"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Software Development",
      school: "Computational Science and AI at university of science and technology, Zewail city",
      date: "Oct 2022 – 2026",
      description: "• Concentration: Gaming and Computer Graphics",
      image: "/images/zewail-city.png",
      courses: ["Computational Science", "Artificial Intelligence", "Game Development", "Computer Graphics"],
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-navy-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-electric-400">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-navy-800/30 backdrop-blur-sm border-navy-700/50 hover:border-electric-500/50 transition-all duration-300 hover:transform hover:translateY(-2px) hover:shadow-lg hover:shadow-electric-500/10"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${edu.image.startsWith('/') ? edu.image : `/${edu.image}`}` : `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.svg`}
                      alt="University Logo"
                      className="w-24 h-24 rounded-lg border border-navy-600 bg-white p-2 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-electric-400 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-200 mb-2">{edu.school}</h4>
                    <p className="text-sm text-gray-400 mb-4">{edu.date}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="secondary"
                          className="bg-electric-500/20 text-electric-300 hover:bg-electric-500/30 transition-colors duration-200"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
