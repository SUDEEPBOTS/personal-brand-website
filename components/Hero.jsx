import HeroStats from './HeroStats';
import Magnetic from './Magnetic';
import Parallax from './Parallax';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow reveal d1">Backend &amp; Distributed Systems Engineer · Delhi</span>
          <h1 className="reveal d2">
            I build <span className="accent sheen">high-concurrency</span> Telegram bots &amp; APIs that actually work.
          </h1>
          <p className="reveal d3">
            I&apos;m Sudeep Mandal — building scalable backend systems, streaming engines, and bot
            infrastructure. No gimmicks — robust distributed systems that hold under load.
          </p>

          <div className="hero-cta reveal d4">
            <Magnetic><a href="#work" className="btn btn-primary">View selected work</a></Magnetic>
            <Magnetic><a href="#contact" className="btn btn-outline">Get in touch</a></Magnetic>
          </div>

          <p className="hero-note-line reveal d4">
            <span className="dot" /> Available for new backend &amp; bot projects.
          </p>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <div className="mouse" />
          scroll
        </div>

        <Parallax speed={0.08}><aside className="hero-note reveal d3">
          <div className="quote">
            &ldquo;Sudeep built our media streaming pipeline and API layer — hundreds of thousands of
            requests a day, and it has never blinked. Deep, rare capability.&rdquo;
            <span className="q">&rdquo;</span>
          </div>
          <div className="cite">— Product lead, Yukisbox</div>
        </aside></Parallax>
      </div>
    </header>
  );
}
