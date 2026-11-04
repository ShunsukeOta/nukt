import Image from "next/image";
import Link from "next/link";
import CoordinateField from "@/components/coordinate-field";
import VideoFeature from "@/components/video-feature";
import { site } from "@/site-data";

function SectionHead({ title, number, count }: { title: string; number: string; count?: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-no">{number} /</span>
      <h2>{title}</h2>
      <span className="section-end">{count ?? "nukt / archive"}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="nukt">
        <CoordinateField />
        <div className="hero-fade" aria-hidden="true" />
        <div className="hero-vertical" aria-hidden="true" />
        <div className="hero-edge hero-edge-left"><span>nukt</span><span>00 / 00</span></div>
        <div className="hero-edge hero-edge-right"><span>35° 41′</span><span>2026</span></div>
        <h1 className="hero-logo" aria-label="nukt"><span>n</span><span>u</span><span>k</span><span>t</span><span className="dot">.</span></h1>
        <div className="hero-bottom"><span className="coordinate">x: 00.000 / y: 00.000</span><a href="#releases">scroll ↓</a></div>
        <div className="hero-side-text" aria-hidden="true">N  U  K  T  /  0  0  1</div>
      </section>

      <section id="releases" className="releases section-space" aria-labelledby="releases-title">
        <div id="releases-title"><SectionHead number="01" title="releases" count="01 — 03" /></div>
        <div className="release-grid">
          {site.releases.map((release, i) => (
            <article className="release" key={release.number} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="cover-wrap"><Image src={release.cover} alt={`${release.title} / concept artwork`} width={1000} height={1000}
                sizes="(max-width: 680px) 100vw, 48vw" /></div>
              <div className="release-meta"><span>{release.number}</span><h3>{release.title}</h3><span>{release.year}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="video" className="video-section section-space" aria-labelledby="video-title">
        <div id="video-title"><SectionHead number="02" title="video" count="moving image" /></div>
        <div className="video-layout">
          <div className="video-desc" data-reveal>
            <div className="large-index">02<span>°</span></div>
            <div className="video-desc-bottom"><span>film / 001</span><span>16:09<br />1920 × 1080</span></div>
          </div>
          <div className="video-content">
            <VideoFeature videoId={site.youtubeVideoId} title={site.youtubeTitle} />
            <div className="video-caption" data-reveal><span>{site.youtubeTitle}</span><span>{site.youtubeVideoId ? "play / youtube" : "not published"}</span></div>
          </div>
        </div>
      </section>

      <section id="history" className="history-section section-space" aria-labelledby="history-title">
        <div id="history-title"><SectionHead number="03" title="history" count="chronology" /></div>
        <div className="history-layout">
          <div className="history-visual" aria-hidden="true" data-reveal>
            <span className="history-axis horizontal" /><span className="history-axis vertical" />
            <span className="history-orbit orbit-a" /><span className="history-orbit orbit-b" />
            <span className="history-center" />
            <span className="history-coordinate">x / 0001</span>
          </div>
          <div className="history-log" data-reveal>
            {site.history.map((event, i) => (
              <div className="history-entry" key={`${event.year}-${event.date}-${i}`}>
                <span className="history-year">{event.year}</span>
                <div className="history-entry-body"><span className="history-event-date">{event.date}</span><h3>{event.title}</h3>{event.detail ? <p>{event.detail}</p> : null}</div>
                <span className="history-entry-index">0{i + 1}</span>
              </div>
            ))}
            <div className="history-continuation"><span className="history-continuation-line"/><span className="history-continuation-point"/></div>
          </div>
        </div>
      </section>

      <section id="links" className="links-section section-space" aria-labelledby="links-title">
        <div id="links-title"><SectionHead number="04" title="links" count="platforms / 04" /></div>
        <div className="platform-list">
          {site.platforms.map((platform, i) => (
            <div key={platform.index} className="platform-item" data-reveal style={{ transitionDelay: `${i * 65}ms` }}>
              {platform.url ? (
                <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={`${platform.name} external link`}>
                  <span className="platform-index">{platform.index}</span><span className="platform-title">{platform.name}</span>
                  <span className="platform-detail">{platform.label}</span><span className="platform-arrow">↗</span>
                </a>
              ) : (
                <div className="platform-unlinked" aria-label={`${platform.name} account not linked yet`}>
                  <span className="platform-index">{platform.index}</span><span className="platform-title">{platform.name}</span>
                  <span className="platform-detail">not linked</span><span className="platform-arrow">·</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="goods-teaser" aria-label="Goods" data-reveal>
        <div className="goods-teaser-art" aria-hidden="true"><span/><span/><span/><span/><span/></div>
        <span className="goods-teaser-index">05 / objects</span>
        <Link href="/goods" className="goods-teaser-link"><span>goods<span className="dot">.</span></span><span className="goods-teaser-arrow" aria-hidden="true">↗</span></Link>
        <div className="goods-teaser-bottom"><span>nukt / objects</span><span>view collection ↗</span></div>
      </section>
    </main>
  );
}
