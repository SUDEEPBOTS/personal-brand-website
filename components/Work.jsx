const PROJECTS = [
  {
    index: '01',
    year: '2026',
    monogram: 'Y',
    thumb: 'thumb-1',
    type: 'Cloud platform',
    title: 'Yukisbox',
    desc: 'High-speed cloud file hosting — chunked uploads and instant byte-range video streaming.',
  },
  {
    index: '02',
    year: '2026',
    monogram: 'A',
    thumb: 'thumb-2',
    type: 'Streaming engine',
    title: 'YukiAPI',
    desc: '4-tier high-throughput media streaming engine, built in Go with multi-client MTProto pools.',
  },
  {
    index: '03',
    year: '2025',
    monogram: 'M',
    thumb: 'thumb-3',
    type: 'Telegram bot',
    title: 'YUKIMUSIC',
    desc: 'Group voice/video chat streaming engine powered by Python, Pyrogram, and FFmpeg.',
  },
];

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Projects built to <span className="accent sheen">hold up</span></h2>
          <p>Live systems carrying real traffic every day.</p>
        </div>

        <div className="work-grid">
          {PROJECTS.map((p) => (
            <div className="work-card reveal" key={p.title}>
              <div className={`work-thumb ${p.thumb}`}>
                <span className="work-index">{p.index}</span>
                <span className="monogram">{p.monogram}</span>
              </div>
              <div className="work-body">
                <span className="work-type">{p.type}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="work-meta">
                  <a href="#" className="work-link">View project</a>
                  <span className="work-year">{p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
