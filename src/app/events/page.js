import Link from 'next/link';
import styles from './events.module.css';

const events = [
  {
    title: 'Friday Blitz Night',
    freq: 'Every Friday',
    time: '7:00 PM',
    format: 'Rapid & Blitz',
    desc: 'Fast-paced casual games, snacks, and great vibes. All levels welcome.',
  },
  {
    title: 'RookHouse Monthly Open',
    freq: 'First Saturday',
    time: '10:00 AM',
    format: 'Classical Rated',
    desc: 'Rated classical tournament with prizes. Bring your A-game.',
  },
  {
    title: 'Junior Cup',
    freq: 'Quarterly',
    time: '9:00 AM',
    format: 'U-17 Tournament',
    desc: 'Our flagship youth tournament. Trophies, certificates, and bragging rights.',
  },
  {
    title: 'Inter-School League',
    freq: 'Every Term',
    time: 'Varies',
    format: 'Team Competition',
    desc: 'Schools across Nairobi compete in league format.',
  },
];

const colors = [
  'var(--color-pastel-purple)',
  'var(--color-pastel-peach)',
  'var(--color-pastel-mint)',
  'var(--color-pastel-green)',
];

export const metadata = {
  title: 'Events & Tournaments | RookHouse Chess',
  description: 'Weekly blitz nights, monthly opens, junior cups, corporate challenges.',
};

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container text-center">
          <p className={styles.heroLabel}>TOURNAMENTS & SOCIALS</p>
          <h1 className={styles.heroTitle}>
            Where battles are won <br />
            <em>& legends made.</em>
          </h1>
        </div>
      </section>

      <section className={styles.eventsSection}>
        <div className="container">
          <div className={styles.eventsGrid}>
            {events.map((e, i) => (
               <div 
                 key={i} 
                 className={styles.eventCard}
                 style={{ backgroundColor: colors[i % colors.length] }}
               >
               <div className={styles.eventContent}>
                 <h3 className={styles.eventTitle}>{e.title}</h3>
                 <p className={styles.eventDesc}>{e.desc}</p>
                 <div className={styles.eventMeta}>
                   <span className={styles.eventTag}>{e.freq}</span>
                   <span className={styles.eventTag}>{e.time}</span>
                   <span className={styles.eventTag}>{e.format}</span>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container text-center">
          <h2 className={styles.ctaText}>Want to host a private tournament or corporate event?</h2>
          <Link href="/contact" className={styles.link}>Get in Touch &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
