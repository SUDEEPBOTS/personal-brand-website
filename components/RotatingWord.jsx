'use client';

import { useEffect, useState } from 'react';

const WORDS = ['Telegram bots', 'APIs', 'streaming engines', 'backend systems'];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index];
    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIndex((i) => (i + 1) % WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="rotating-word">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
