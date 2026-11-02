const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Clean interface design and thoughtful layout — a visual system that gives your brand authority and makes navigation feel effortless.',
    tags: ['UI / UX', 'Design systems', 'Responsive'],
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Fast, accessible, and maintainable builds — from marketing sites to full web apps, engineered to load quickly on any device.',
    tags: ['HTML / CSS', 'JavaScript', 'Performance'],
  },
  {
    num: '03',
    title: 'Digital Strategy',
    desc: 'I help you shape the website your customers actually need — structure, messaging, and design that leads to more enquiries and sales.',
    tags: ['Research', 'SEO', 'Analytics'],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <h2>What I can do for you</h2>
          <p>Three focused ways I help businesses put their best foot forward online.</p>
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
