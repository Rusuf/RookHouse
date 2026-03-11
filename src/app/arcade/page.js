import Link from 'next/link';
import Image from 'next/image';
import styles from './arcade.module.css';

const features = [
  { title: 'Chess Stations', desc: 'Premium boards, digital clocks, and quality pieces at every table.' },
  { title: 'Café & Snacks', desc: 'Fresh coffee, juice, and light bites while you play.' },
  { title: 'Digital Zone', desc: 'Play online on Chess.com and Lichess using our tablets.' },
  { title: 'Chess Library', desc: 'Browse our collection of chess books, puzzles, and strategy guides.' },
];

const colors = [
  'var(--color-pastel-orange)',
  'var(--color-pastel-blue)',
  'var(--color-pastel-mint)',
  'var(--color-pastel-yellow)',
];

export const metadata = {
  title: 'The Arcade | RookHouse Nairobi',
  description: 'Walk in, pull up a board, grab a coffee. Nairobi\'s dedicated chess cafe.',
};

export default function ArcadePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container text-center">
          <p className={styles.heroLabel}>THE ARCADE</p>
          <h1 className={styles.heroTitle}>
            Walk in. <br />
            <em>Pull up a board.</em>
          </h1>
          <p className={styles.heroSub}>
            RookHouse Arcade is Nairobi&apos;s physical chess home. A social space where 
            you grab a coffee, challenge a stranger, and leave with a new friend.
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div 
                key={i} 
                className={styles.featureCard}
                style={{ backgroundColor: colors[i % colors.length] }}
              >
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.gallery}>
             <div className={`${styles.gItem} ${styles.g1}`}>
                <Image src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80" alt="Arcade vibe" fill className={styles.img} />
             </div>
             <div className={`${styles.gItem} ${styles.g2}`}>
                <Image src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&q=80" alt="Chess boards" fill className={styles.img} />
             </div>
             <div className={`${styles.gItem} ${styles.g3}`}>
                <Image src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&q=80" alt="People playing" fill className={styles.img} />
             </div>
          </div>
        </div>
      </section>

      <section className={styles.visitSection}>
        <div className="container">
          <div className={styles.visitGrid}>
            <div className={styles.visitCard}>
              <h3>Visit Us</h3>
              <p className={styles.bold}>RookHouse Arcade</p>
              <p>Nairobi, Kenya</p>
              <Link href="/contact" className={styles.link}>View on Map &rarr;</Link>
            </div>
            <div className={styles.visitCard}>
              <h3>Pricing</h3>
              <div className={styles.priceRow}>
                <span>Walk-in (non-member)</span>
                <span>KES 300</span>
              </div>
              <div className={styles.priceRow}>
                <span>Members</span>
                <span>Free</span>
              </div>
              <Link href="/membership" className={styles.link}>Become a Member &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
