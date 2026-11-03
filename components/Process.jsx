const STEPS = [
  {
    num: '01',
    title: 'Brief & scoping',
    desc: 'We pin down the problem, the traffic you expect, and the constraints. I give you a clear plan and timeline.',
  },
  {
    num: '02',
    title: 'Architecture & build',
    desc: 'I design and build the system in your repo — shipping working milestones as we go, not one big surprise at the end.',
  },
  {
    num: '03',
    title: 'Load & hardening',
    desc: 'Before launch we test under load, tune bottlenecks, and harden the service so it survives real traffic.',
  },
  {
    num: '04',
    title: 'Launch & handover',
    desc: 'We deploy, monitor, and I document everything — so your team can run and extend it confidently.',
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Process</span>
          <h2>How I work</h2>
          <p>A calm, transparent path from idea to production.</p>
        </div>

        <div className="process-grid">
          {STEPS.map((s) => (
            <div className="process-card reveal" key={s.num}>
              <div className="process-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
