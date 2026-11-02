const SERVICES = [
  {
    num: '01',
    title: 'Backend Systems',
    desc: 'High-concurrency services and APIs built in Go and Python — designed to scale and survive real production load.',
    tags: ['Go', 'Python', 'Redis', 'Docker'],
  },
  {
    num: '02',
    title: 'Bot Architecture',
    desc: 'Telegram bots and bot networks engineered around MTProto — voice/video streaming, automation, and media pipelines.',
    tags: ['Telegram', 'MTProto', 'Pyrogram', 'FFmpeg'],
  },
  {
    num: '03',
    title: 'Streaming & Infra',
    desc: 'Media streaming engines, chunked uploads, edge caching, and Cloudflare Workers — fast delivery anywhere in the world.',
    tags: ['Streaming', 'Cloudflare', 'Edge cache', 'APIs'],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <h2>What I can do for you</h2>
          <p>Deep, specialized backend work — the kind that keeps systems fast and steady.</p>
        </div>

        <div className="services-list">
          {SERVICES.map((s) => (
            <div className="service-row reveal" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
