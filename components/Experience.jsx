const TIMELINE = [
  {
    period: '2023 — Present',
    title: 'Yukisbox · Founder & Lead Engineer',
    desc: 'Architected a high-speed cloud file hosting and video streaming platform — chunked uploads, byte-range streaming, edge caching.',
  },
  {
    period: '2024 — Present',
    title: 'YukiAPI · Creator',
    desc: 'Built a 4-tier high-throughput media streaming engine in Go with multi-client MTProto pools serving hundreds of thousands of requests daily.',
  },
  {
    period: '2022 — Present',
    title: 'Telegram Bot Ecosystem',
    desc: 'Designed and operated production Telegram media bots (YUKIMUSIC) — voice/video streaming pipelines in Python, Pyrogram, FFmpeg.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Building production systems for years</h2>
          <p>A track record of platforms that run at scale, every day.</p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
