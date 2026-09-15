import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProjectSection } from "@/components/project-section"
import { content } from "@/lib/content"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 border border-ink/20 bg-paper px-4 py-2 text-ink transition-transform focus:translate-y-0"
        style={{ borderRadius: "var(--radius)" }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        {content.sections.map((section) => (
          <ProjectSection
            key={section.id}
            id={section.id}
            title={section.title}
            projects={section.projects}
            layout={section.layout}
          />
        ))}
      </main>
    </div>
  )
}
