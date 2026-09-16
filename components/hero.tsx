import { Squiggle } from "@/components/squiggle"
import { assetPath } from "@/lib/asset-path"
import { content } from "@/lib/content"

export function Hero() {
  const { name, text, photo } = content.home

  return (
    <section id="home" className="section-shell flex min-h-[calc(100svh-var(--header-h))] flex-col">
      <div className="hero-row">
        <div className="hero-copy">
          <h1 className="hero-name whitespace-pre-line text-ink">{name}</h1>
          <p className="mt-[var(--line)] max-w-xl text-ink/85">{text}</p>
        </div>
        {photo.trim() ? (
          <div className="photo-home">
            <div className="polaroid">
              <img
                src={assetPath(photo)}
                alt={`${content.site.name}, technical game designer and game developer`}
                width={1024}
                height={765}
              />
            </div>
          </div>
        ) : null}
      </div>
      <Squiggle seed="home" />
    </section>
  )
}
