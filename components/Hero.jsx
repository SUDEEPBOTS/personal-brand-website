import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow reveal d1">Independent developer · Mumbai</span>
          <h1 className="reveal d2">
            I build clear, thoughtful <span className="accent sheen">digital products</span> that do real work.
          </h1>
          <p className="reveal d3">
            I&apos;m Arjun Sharma — a developer and designer helping brands launch clean, fast,
            and purposeful websites. No noise, no gimmicks — just considered design that performs.
          </p>

          <div className="hero-cta reveal d4">
            <a href="#work" className="btn btn-primary">View selected work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>

          <HeroStats />
        </div>

        <aside className="hero-note reveal d3">
          <div className="quote">
            &ldquo;Arjun translated our vague idea into a clear, confident website. The process was
            smooth, and the result has quietly lifted our business.&rdquo;
            <span className="q">&rdquo;</span>
          </div>
          <div className="cite">— Project lead, Nova Analytics</div>
        </aside>
      </div>
    </header>
  );
}
