"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  links: Array<{ type: string; url: string }>
  technologies: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const isMobile = useMobile()

  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-950 border-navy-700/50 text-gray-200 backdrop-blur-xl custom-scrollbar w-[95vw] sm:w-[85vw] md:w-4/5 p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-electric-400 to-navy-300 bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.image}` : `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.svg`}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover rounded-xl"
            />
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-navy-700/50 to-navy-600/50 text-electric-300 border-navy-500/50 hover:bg-gradient-to-r hover:from-navy-600/60 hover:to-navy-500/60 text-xs sm:text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Full Description */}
          <div className="prose prose-invert max-w-none">
            <div className="text-sm sm:text-base text-gray-300 whitespace-pre-line leading-relaxed">
              {project.fullDescription}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-navy-600/50">
            {project.links.map((link, index) => {
              const getIcon = () => {
                switch (link.type.toLowerCase()) {
                  case "github":
                    return <Github className="h-4 w-4" />
                  case "youtube":
                  case "demo":
                    return <Play className="h-4 w-4" />
                  default:
                    return <ExternalLink className="h-4 w-4" />
                }
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  className="border-navy-600/50 text-electric-400 hover:bg-gradient-to-r hover:from-navy-700 hover:to-navy-600 hover:text-gray-100 bg-gradient-to-r from-navy-800/50 to-navy-700/50"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {getIcon()}
                  <span className="ml-2">{link.type}</span>
                </Button>
              )
            })}
          </div>

          {/* Close Button at Bottom */}
          <div className="flex justify-center pt-6 border-t border-navy-600/50">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-navy-700 to-navy-600 hover:from-navy-600 hover:to-navy-500 text-gray-100 px-6 sm:px-8 py-2 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>

        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(1, 25, 105, 0.2);
            border-radius: 4px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #001969, #0087ff);
            border-radius: 4px;
            border: 1px solid rgba(0, 135, 255, 0.3);
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #0087ff, #001969);
          }
          
          /* Firefox scrollbar */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #001969 rgba(1, 25, 105, 0.2);
          }
        `}</style>
      </DialogContent>
    </Dialog>
  )
}
