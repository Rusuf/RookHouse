import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'Our Story | RookHouse Chess',
  description: 'How a group of chess enthusiasts built Nairobi\'s first dedicated chess community space.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container text-center">
          <p className={styles.heroLabel}>OUR STORY</p>
          <h1 className={styles.heroTitle}>
            Built for the <em>community.</em>
          </h1>
          <p className={styles.heroSub}>
            Karibu RookHouse. We believe chess shouldn&apos;t just be a quiet game played in isolation.
          </p>
        </div>
      </section>

      {/* Story Text */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyContent}>
            <p className={styles.lead}>
              RookHouse wasn&apos;t started by grandmasters or tournament directors. It was started 
              by players who were tired of having nowhere to play except loud food courts or quiet bedrooms.
            </p>
            <p className={styles.text}>
              We looked at the local chess scene—schools playing in isolated pockets, campus students playing 
              on their phones, and adults with nowhere to socialize over a board. We wanted a physical space. 
              A club that felt less like a stiff library and more like a welcoming local cafe.
            </p>
            <p className={styles.text}>
              So we built RookHouse. An arcade, an academy, and a community hub for anyone who 
              wants to approach the board.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className={styles.philosophySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Community First</h3>
              <p>Chess is inherently social. We build systems, events, and spaces that bring people together, not isolate them behind screens.</p>
            </div>
            <div className={styles.card}>
              <h3>Accessible Brilliance</h3>
              <p>Whether you&apos;re 6 or 60, a beginner rating 400 or a seasoned 2000, there is a seat for you at our tables.</p>
            </div>
            <div className={styles.card}>
              <h3>Elevating the Game</h3>
              <p>We want to change how chess is perceived in East Africa. It&apos;s not just for elites; it&apos;s for the culture.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
