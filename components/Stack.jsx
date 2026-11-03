const TOOLS = [
  'Go / Golang',
  'Python',
  'JavaScript',
  'SQL',
  'Bash',
  'MTProto',
  'Redis',
  'Docker',
];

import Marquee from './Marquee';

export default function Stack() {
  return (
    <div className="stack">
      <div className="container">
        <span className="stack-label">Core stack</span>
        <Marquee items={TOOLS} />
      </div>
    </div>
  );
}
