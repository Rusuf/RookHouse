import Link from 'next/link';
import styles from './academy.module.css';

const programs = [
  {
    level: 'Little Pawns',
    ages: '5–7 years',
    duration: '8-week terms',
    focus: [
      'Piece names & movements',
      'Fun chess puzzles & stories',
      'Board setup & basic rules',
      'Good sportsmanship',
    ],
  },
  {
    level: 'Rising Knights',
    ages: '8–10 years',
    duration: '10-week terms',
    focus: [
      'Basic tactics (forks, pins)',
      'Simple opening principles',
      'Tournament etiquette',
      'Puzzle solving challenges',
    ],
  },
  {
    level: 'Castle Builders',
    ages: '11–13 years',
    duration: '12-week terms',
    focus: [
      'Intermediate strategy',
      'Endgame fundamentals',
      'Competitive preparation',
      'Game analysis & review',
    ],
  },
  {
    level: "King's Guard",
    ages: '14–17 years',
    duration: 'Ongoing',
    focus: [
      'Advanced tactics & openings',
      'Tournament-level play',
      'Online rated games',
      'Mentorship & leadership',
    ],
  },
];

const colors = [
  'var(--color-pastel-orange)',
  'var(--color-pastel-purple)',
  'var(--color-pastel-blue)',
  'var(--color-pastel-yellow)',
];

export const metadata = {
  title: 'Chess Academy | RookHouse Nairobi',
  description: 'Structured chess coaching for kids & teens ages 5-17 in Nairobi. Build critical thinking and patience at RookHouse.',
};

export default function AcademyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroLabel}>YOUTH ACADEMY</p>
          <h1 className={styles.heroTitle}>
            Building minds,<br />
            <em>one move at a time.</em>
          </h1>
          <p className={styles.heroSub}>
            Structured chess coaching for kids and teens aged 5–17. From first moves 
            to national competitions — we focus on patience, logic, and confidence.
          </p>
        </div>
      </section>

      <section className={styles.programsSection}>
        <div className="container">
          <div className={styles.programsGrid}>
            {programs.map((p, i) => (
              <div 
                key={i} 
                className={styles.programCard}
                style={{ backgroundColor: colors[i % colors.length], borderColor: 'transparent' }}
              >
                <div className={styles.programHeader}>
                  <h3 className={styles.programName}>{p.level}</h3>
                  <div className={styles.programMeta}>
                    <span className={styles.badge}>{p.ages}</span>
                    <span className={styles.programDuration}>{p.duration}</span>
                  </div>
                </div>
                <ul className={styles.programFocus}>
                  {p.focus.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to enroll?</h2>
            <p>Spots fill up quickly. Secure your child&apos;s place in the next term.</p>
            <Link href="/contact" className="btn btn-primary">
              Contact us to enroll
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
