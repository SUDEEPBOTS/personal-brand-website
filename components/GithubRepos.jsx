'use client';

import { useEffect, useState } from 'react';

const USER = 'SUDEEPBOTS';

export default function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=6`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (alive) setRepos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (alive) setError('Could not load repos right now.');
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="oss">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Open source</span>
          <h2>Code I&apos;ve published</h2>
          <p>Live from GitHub — recent public work.</p>
        </div>

        {error ? (
          <p className="oss-error reveal">{error}</p>
        ) : repos.length === 0 ? (
          <div className="oss-grid">
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <div className="oss-card oss-skeleton" key={k}>
                <div className="sk sk-name" />
                <div className="sk sk-line" />
                <div className="sk sk-line short" />
                <div className="sk sk-meta" />
              </div>
            ))}
          </div>
        ) : (
          <div className="oss-grid">
            {repos.map((r) => (
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="oss-card reveal"
                key={r.id}
              >
                <div className="oss-top">
                  <span className="oss-name">{r.name}</span>
                  {r.fork && <span className="oss-fork">fork</span>}
                </div>
                <p className="oss-desc">{r.description || 'No description provided.'}</p>
                <div className="oss-meta">
                  {r.language && <span className="oss-lang">{r.language}</span>}
                  <span className="oss-stars">★ {r.stargazers_count ?? 0}</span>
                  <span className="oss-forks">⑂ {r.forks_count ?? 0}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
