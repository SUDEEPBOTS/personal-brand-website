'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const up = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`to-top ${visible ? 'show' : ''}`}
      aria-label="Back to top"
      onClick={up}
    >
      &uarr;
    </button>
  );
}
