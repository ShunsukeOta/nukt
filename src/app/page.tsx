import Image from "next/image";

const releases = [
  { number: "001", title: "untitled 01", year: "2026", cover: "/images/cover-01.svg" },
  { number: "002", title: "untitled 02", year: "2026", cover: "/images/cover-02.svg" },
  { number: "003", title: "untitled 03", year: "2026", cover: "/images/cover-03.svg" },
];

// Art-directed coordinate field. Deterministic values render on the server.
const nodes = Array.from({ length: 27 * 13 }, (_, index) => {
  const col = index % 27;
  const row = Math.floor(index / 27);
  return { id: index, x: 64 + col * 56, y: 66 + row * 53, col, row };
});
const trace = Array.from({ length: 125 }, (_, index) => {
  const x = 54 + index * 12.3;
  const y = 362 + Math.sin(index * 0.078) * 97 + Math.sin(index * 0.23) * 24;
  return (index === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
}).join(" ");

function CoordinateField() {
  return (
    <svg className="coordinate-field" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="currentColor" strokeWidth=".65" opacity=".18">
        {Array.from({ length: 28 }, (_, i) =>
          <line key={"v" + i} x1={64 + i * 56} y1="0" x2={64 + i * 56} y2="800" />
        )}
        {Array.from({ length: 15 }, (_, i) =>
          <line key={"h" + i} x1="0" y1={66 + i * 53} x2="1600" y2={66 + i * 53} />
        )}
      </g>
      <g fill="currentColor">
        {nodes.map(node =>
          <circle key={node.id} cx={node.x} cy={node.y}
            r={(node.col + node.row) % 9 === 0 ? 2.2 : 0.9}
            opacity={(node.col + node.row) % 9 === 0 ? 0.82 : 0.3} />
        )}
      </g>
      <path d={trace} stroke="currentColor" strokeWidth="1.15" fill="none" opacity=".65" />
      <path d="M 0 440 L 1600 440 M 805 0 L 805 800" stroke="currentColor"
        strokeWidth="1.1" opacity=".38" strokeDasharray="2 8" />
      <g fill="none" stroke="currentColor" opacity=".48">
        <circle cx="805" cy="440" r="115" strokeWidth=".8" />
        <circle cx="805" cy="440" r="161" strokeWidth=".6" strokeDasharray="3 8" />
        <circle cx="805" cy="440" r="233" strokeWidth=".5" />
        <circle cx="805" cy="440" r="3" fill="currentColor" stroke="none" />
        <path d="M 690 440 H 920 M 805 325 V 555" strokeWidth=".8" />
      </g>
      <g fill="currentColor" opacity=".55">
        <rect x="44" y="41" width="5" height="5" />
        <rect x="1510" y="735" width="5" height="5" />
        <circle cx="1320" cy="267" r="4" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="frame" id="top">
      <header className="site-header">
        <a className="header-wordmark" href="#top" aria-label="nukt ホーム">nukt<span className="dot">.</span></a>
        <nav aria-label="Navigation">
          <a href="#releases">releases</a>
          <a href="mailto:nukt.mp3@gmail.com">contact</a>
        </nav>
        <span className="header-index">n / 001</span>
      </header>

      <main>
        <section className="hero" aria-label="nukt">
          <CoordinateField />
          <div className="hero-edge hero-edge-left"><span>00</span><span>∞</span></div>
          <div className="hero-edge hero-edge-right"><span>35° 41′</span><span>2026</span></div>
          <h1 className="hero-logo">nukt<span className="dot">.</span></h1>
          <div className="hero-bottom"><span className="coordinate">x: 00.000 / y: 00.000</span><a href="#releases">↓ / releases</a></div>
        </section>

        <section id="releases" className="releases" aria-labelledby="releases-title">
          <div className="section-head"><h2 id="releases-title">releases</h2><span>01 — 03</span></div>
          <div className="release-grid">
            {releases.map(item => (
              <article className="release" key={item.number}>
                <div className="cover-wrap">
                  <Image src={item.cover} alt={item.title + " の仮ジャケット"} width={1000} height={1000}
                    sizes="(max-width: 680px) 100vw, 48vw" />
                </div>
                <div className="release-meta"><span>{item.number}</span><h3>{item.title}</h3><span>{item.year}</span></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer"><span>nukt.</span><span>© 2026</span><a href="#top">↑ top</a></footer>
    </div>
  );
}
