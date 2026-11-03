'use client';

import { useEffect } from 'react';

const SELECTOR = '.reveal, .reveal-left, .reveal-right';

export default function RevealProvider({ children }) {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTOR);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
