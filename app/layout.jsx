import './globals.css';
import './animations.css';
import RevealProvider from '@/components/RevealProvider';
import ProgressBar from '@/components/ProgressBar';
import BackToTop from '@/components/BackToTop';
import Protect from '@/components/Protect';

const FAVICON =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#1f3f63"/><text x="16" y="22" font-family="Georgia,serif" font-size="18" font-weight="600" fill="#ffffff" text-anchor="middle">A</text></svg>`
  );

export const metadata = {
  title: 'SUDEEPBOTS — Backend Engineer & Telegram Bot Architect',
  description: 'Sudeep Mandal (SUDEEPBOTS) — backend & distributed systems engineer based in Delhi, India.',
  icons: { icon: FAVICON },
  openGraph: {
    title: 'SUDEEPBOTS — Backend Engineer & Telegram Bot Architect',
    description: 'Backend & distributed systems engineer based in Delhi, India.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport = {
  themeColor: '#f7f6f2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <Protect />
        <ProgressBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sudeep Mandal',
              alternateName: 'SUDEEPBOTS',
              jobTitle: 'Backend & Distributed Systems Engineer',
              url: 'https://github.com/SUDEEPBOTS',
              email: 'sudeeptelegram@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
            }),
          }}
        />
        <RevealProvider>{children}</RevealProvider>
        <BackToTop />
      </body>
    </html>
  );
}
