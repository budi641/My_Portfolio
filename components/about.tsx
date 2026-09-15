import { assetPath } from "@/lib/asset-path"
import { content, type SiteLink } from "@/lib/content"
import { Squiggle } from "@/components/squiggle"

function aboutLink(links: SiteLink[], label: string) {
  return links.find((link) => link.label === label)
}

function AboutLink({ link }: { link: SiteLink }) {
  return (
    <a
      href={link.url}
      className="text-btn w-full justify-center"
      target={link.url.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {link.text}
    </a>
  )
}

export function About() {
  const { about } = content
  const linkedIn = aboutLink(about.links, "LinkedIn")
  const gitHub = aboutLink(about.links, "GitHub")
  const email = aboutLink(about.links, "Email")
  const resume = aboutLink(about.links, "Resume")

  return (
    <section id={about.id}>
      <div className="section-heading">
        <h2 className="section-title">{about.title}</h2>
      </div>
      <div className="section-shell !pt-0">

        <div className="pair mt-[var(--line)]">
          <div className="photo-about">
            <div className="sticky-note sticky-left">
              <img
                src={assetPath(about.image)}
                alt={content.site.name}
                width={1600}
                height={1200}
                className="about-photo"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="whitespace-pre-line text-ink/90">{about.paragraph}</p>
            <div className="mt-[var(--line)] grid w-fit max-w-full grid-cols-2 gap-x-3 gap-y-[var(--line)]">
              {linkedIn ? <AboutLink link={linkedIn} /> : null}
              {gitHub ? <AboutLink link={gitHub} /> : null}
              {email ? (
                <div className="col-span-2">
                  <AboutLink link={email} />
                </div>
              ) : null}
              {resume ? (
                <div className="col-span-2 w-1/2">
                  <AboutLink link={resume} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="page-x">
        <Squiggle seed="about" />
      </div>
    </section>
  )
}
