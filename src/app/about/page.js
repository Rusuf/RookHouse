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
              RookHouse wasn&apos;t founded by grandmasters or elite tournament directors. It was built by ordinary players tired of settling for noisy food courts or solitary bedrooms.
            </p>
            <p className={styles.text}>
              We looked at the local scene—schools confined to isolated pockets, students glued to their phone screens, and adults with nowhere to connect over a real board. We craved a physical home. A space that felt far less like a stuffy library and far more like a vibrant, welcoming local café.
            </p>
            <p className={styles.text}>
              So we built RookHouse. More than just a club—it&apos;s an arcade, an academy, and a thriving community hub where everyone is invited to pull up a chair.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className={styles.philosophySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.cardOrange}`}>
              <h3>Community First</h3>
              <p>Chess is inherently social. We design experiences, events, and spaces that unite people, pulling them away from screens to connect face-to-face.</p>
            </div>
            <div className={`${styles.card} ${styles.cardPurple}`}>
              <h3>Accessible Brilliance</h3>
              <p>Whether you are 6 or 60, a 400-rated beginner or a 2000-rated veteran, there is always an open seat waiting for you at our tables.</p>
            </div>
            <div className={`${styles.card} ${styles.cardMint}`}>
              <h3>Elevating the Game</h3>
              <p>We are changing how chess is perceived across East Africa. It&apos;s not a game reserved for the elite; it&apos;s a movement built for the culture.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
