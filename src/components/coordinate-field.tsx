const nodes = Array.from({ length: 27 * 13 }, (_, index) => {
  const col = index % 27;
  const row = Math.floor(index / 27);
  return { id: index, x: 64 + col * 56, y: 66 + row * 53, col, row };
});

const trace = Array.from({ length: 125 }, (_, index) => {
  const x = 54 + index * 12.3;
  const y = 362 + Math.sin(index * 0.078) * 97 + Math.sin(index * 0.23) * 24;
  return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ");

export default function CoordinateField() {
  return (
    <svg className="coordinate-field" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="signal-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset=".52" stopColor="currentColor" stopOpacity=".20" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="coordinate-grid" stroke="currentColor" strokeWidth=".65" opacity=".18">
        {Array.from({ length: 28 }, (_, i) => <line key={`v${i}`} x1={64 + i * 56} y1="0" x2={64 + i * 56} y2="800" />)}
        {Array.from({ length: 15 }, (_, i) => <line key={`h${i}`} x1="0" y1={66 + i * 53} x2="1600" y2={66 + i * 53} />)}
      </g>
      <g fill="currentColor">
        {nodes.map(node => (
          <circle key={node.id} cx={node.x} cy={node.y} r={(node.col + node.row) % 9 === 0 ? 2.2 : 0.9} opacity={(node.col + node.row) % 9 === 0 ? 0.82 : 0.3} />
        ))}
      </g>
      <g fill="currentColor" className="signal-points">
        {[
          [232, 225], [456, 490], [568, 172], [736, 596], [904, 384],
          [1072, 225], [1240, 543], [1352, 331], [456, 755], [1184, 119],
        ].map(([x, y], i) => (
          <circle key={i} className="signal-point" cx={x} cy={y} r="4" style={{ animationDelay: `${i * -0.92}s` }} />
        ))}
      </g>
      <path className="trace-path" d={trace} stroke="currentColor" strokeWidth="1.15" fill="none" opacity=".65" />
      <path d="M 0 440 L 1600 440 M 805 0 L 805 800" stroke="currentColor" strokeWidth="1.1" opacity=".38" strokeDasharray="2 8" />
      <g className="orbit-rings" fill="none" stroke="currentColor" opacity=".48">
        <circle cx="805" cy="440" r="115" strokeWidth=".8" />
        <circle cx="805" cy="440" r="161" strokeWidth=".6" strokeDasharray="3 8" />
        <circle cx="805" cy="440" r="233" strokeWidth=".5" />
        <path d="M 690 440 H 920 M 805 325 V 555" strokeWidth=".8" />
      </g>
      <g className="orbit-tick" fill="currentColor">
        <circle cx="805" cy="279" r="4" />
        <circle cx="966" cy="440" r="2.5" />
      </g>
      <circle className="origin-pulse" cx="805" cy="440" r="3" fill="currentColor" />
      <g fill="currentColor" opacity=".55">
        <rect x="44" y="41" width="5" height="5" />
        <rect x="1510" y="735" width="5" height="5" />
        <circle cx="1320" cy="267" r="4" />
      </g>
      <rect className="scan-band" x="0" y="-100" width="1600" height="100" fill="url(#signal-gradient)" />
      <line className="scan-line" x1="0" y1="-12" x2="1600" y2="-12" stroke="currentColor" strokeWidth="1" opacity=".28" />
    </svg>
  );
}
