const PROJECTS = [
  {
    index: '01',
    year: '2026',
    monogram: 'N',
    thumb: 'thumb-1',
    type: 'SaaS website',
    title: 'Nova Analytics',
    desc: 'A clear, credible product site for a data startup. The redesign lifted demo signups by 3.2x.',
  },
  {
    index: '02',
    year: '2025',
    monogram: 'B',
    thumb: 'thumb-2',
    type: 'E-commerce',
    title: 'Bloom Store',
    desc: 'An online store with a friction-free checkout. Conversion rate doubled after launch.',
  },
  {
    index: '03',
    year: '2025',
    monogram: 'F',
    thumb: 'thumb-3',
    type: 'Community platform',
    title: 'FitX',
    desc: 'A measured landing page and content hub for a fitness community — built for both speed and clarity.',
  },
];

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>A few projects I&apos;m proud of</h2>
          <p>Recent collaborations, each built to solve a specific business problem.</p>
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
                  <a href="#" className="work-link">View case study</a>
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
