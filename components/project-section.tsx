import { ExternalLink, Github } from "lucide-react"
import { ProjectSticky } from "@/components/project-sticky"
import { Squiggle } from "@/components/squiggle"
import type { Project, SectionLayout } from "@/lib/content"

function LinkButtons({ links, centered }: { links: Project["links"]; centered?: boolean }) {
  return (
    <div className={`cluster flex flex-wrap gap-x-3 gap-y-0 ${centered ? "justify-center" : ""}`}>
      {links.map((link, index) => {
        const label = (
          <>
            {link.type === "GitHub" ? <Github className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
            {link.type}
          </>
        )

        if (!link.url.trim()) {
          return (
            <span key={`${link.type}-${index}`} className="text-btn" aria-disabled="true">
              {label}
            </span>
          )
        }

        return (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="text-btn">
            {label}
          </a>
        )
      })}
    </div>
  )
}

function ProjectDetails({ project, align }: { project: Project; align: "left" | "right" | "center" }) {
  const copyClass = align === "right" ? "project-copy-right" : align === "center" ? "showcase-copy" : ""
  const clusterClass = align === "center" ? "justify-center" : ""

  return (
    <div className={copyClass}>
      <p className="text-ink/80">{project.shortDescription}</p>
      {project.technologies.length > 0 ? (
        <div className={`cluster mt-[var(--line)] flex flex-wrap gap-x-3 gap-y-0 ${clusterClass}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      ) : null}
      {project.links.length > 0 ? (
        <div className="mt-[var(--line)]">
          <LinkButtons links={project.links} centered={align === "center"} />
        </div>
      ) : null}
      <details className="mt-[var(--line)]">
        <summary className="cursor-pointer text-pen underline decoration-pen/30 underline-offset-4 hover:decoration-pen">
          Full details
        </summary>
        <div className="mt-[var(--line)] whitespace-pre-wrap text-left text-ink/75">{project.fullDescription}</div>
      </details>
    </div>
  )
}

function ProjectCard({ project, onRight, index }: { project: Project; onRight: boolean; index: number }) {
  const tilt = index % 2 === 0 ? "sticky-left" : "sticky-right"
  const titleShift = index % 2 === 0 ? "note-title-a" : "note-title-b"

  return (
    <div className={`project-slot ${onRight ? "project-slot-right" : "project-slot-left"}`}>
      <article className="project-card">
        <ProjectSticky
          project={project}
          tiltClass={tilt}
          titleClassName={`note-title ${titleShift}`}
        />
        <ProjectDetails project={project} align={onRight ? "right" : "left"} />
      </article>
    </div>
  )
}

function ShowcaseCard({ project }: { project: Project }) {
  return (
    <article className="showcase-slot">
      <div className="showcase-card w-full">
        <ProjectSticky
          project={project}
          orientation="landscape"
          tiltClass="sticky-straight"
          titleClassName="note-title note-title-center"
        />
        <ProjectDetails project={project} align="center" />
      </div>
    </article>
  )
}

export function ProjectSection({
  id,
  title,
  projects,
  layout = "grid",
}: {
  id: string
  title: string
  projects: Project[]
  layout?: SectionLayout
}) {
  const showcase = layout === "showcase"

  return (
    <section id={id}>
      <div className="section-heading">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className={`${showcase ? "showcase-board" : "project-board"} page-x`}>
        {projects.map((project, index) =>
          showcase ? (
            <ShowcaseCard key={project.title} project={project} />
          ) : (
            <ProjectCard key={project.title} project={project} onRight={index % 2 === 1} index={index} />
          ),
        )}
      </div>
      <div className="page-x">
        <Squiggle seed={id} />
      </div>
    </section>
  )
}
