import Link from 'next/link';
import styles from './streaming.module.css';

const contentTypes = [
  { title: 'Live Streaming', platform: 'YouTube / Twitch', desc: 'Live games, viewer challenges, community arena tournaments.' },
  { title: 'Game Reactions', platform: 'YouTube / TikTok', desc: 'Reacting to member games — funny blunders, brilliant moves, epic comebacks.' },
  { title: 'Chess Lessons', platform: 'YouTube', desc: 'Beginner to intermediate tutorials. Openings, tactics, endgames.' },
  { title: 'Tournament Coverage', platform: 'YouTube / IG Live', desc: 'Live commentary and analysis of RookHouse and national tournaments.' },
];

export const metadata = {
  title: 'Streaming | RookHouse Chess',
  description: 'Watch live chess streams, game reactions, tutorials from RookHouse.',
};

export default function StreamingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container text-center">
          <p className={styles.heroLabel}>CONTENT & BROADCASTS</p>
          <h1 className={styles.heroTitle}>
            Chess content, <br />
            <em>Kenyan style.</em>
          </h1>
          <p className={styles.heroSub}>
            From live game reactions to educational tutorials — we&apos;re putting 
            Kenyan chess on the global map.
          </p>
          <div className={styles.socials}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {contentTypes.map((c, i) => (
              <div key={i} className={styles.contentCard}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.contentTitle}>{c.title}</h3>
                  <span className={styles.badge}>{c.platform}</span>
                </div>
                <p className={styles.contentDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.videoPlaceholder}>
            <p>Live stream offline. Check back later.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container text-center">
          <h2 className={styles.ctaText}>Want us to react to your game?</h2>
          <p className={styles.ctaSub}>Join our Discord to submit your PGNs.</p>
          <a href="https://discord.gg/rookhouse" target="_blank" rel="noopener noreferrer" className={styles.link}>Join Discord Server &rarr;</a>
        </div>
      </section>
    </div>
  );
}
