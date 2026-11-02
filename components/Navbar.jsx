'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Selected Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="brand">Arjun Sharma</a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Start a project</a>

        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
