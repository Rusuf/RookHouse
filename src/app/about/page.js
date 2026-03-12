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
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>THE ROOKHOUSE ORIGIN</p>
            <h1 className={styles.heroTitle}>
              Born from a simple frustration. <br/>
              <em>Built for a legacy.</em>
            </h1>
            <p className={styles.heroSub}>
              We weren&apos;t grandmasters. We were just friends craving a real home for the game, far from normal bedroom chess. So we built our own.
            </p>
          </div>
        </div>
      </section>

      {/* The Story Section - Two Column with Image layout */}
      <section className={styles.storySection}>
        <div className={`container ${styles.storyContainer}`}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyHeading}>A Sanctuary in the City</h2>
            <p className={styles.text}>
              Looking at the local scene, the disconnect was obvious. Schools were playing in isolated pockets across Nairobi, Kiambu, and Kajiado. Campus students were glued to their phone screens. Adults had nowhere to sit, sip a coffee, and connect over a real, tangible board.
            </p>
            <p className={styles.text}>
              We craved a physical home. A space that felt far less like a stiff, hyper-competitive library, and far more like a vibrant, welcoming local café. A place that could stand the test of time long after we are gone.
            </p>
            <p className={styles.text}>
              <strong>And so, RookHouse was born.</strong> More than just a club—it&apos;s an arcade, an academy, and a thriving community hub where a 5-year-old beginner or a seasoned veteran can pull up a chair and find their equal.
            </p>
          </div>
          <div className={styles.storyImageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800&auto=format&fit=crop" 
              alt="Chess board setup" 
              fill 
              className={styles.storyImage} 
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className={`container ${styles.missionContainer}`}>
          
          <div className={`${styles.missionBlock} ${styles.bgMint}`}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p>
              To make chess the standard go-to recreational game among the young Kenyan populace, and to scout, nurture, and produce the next generation of internationally competitive, titled chess prodigies.
            </p>
          </div>

          <div className={`${styles.missionBlock} ${styles.bgOrange}`}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5"/>
              </svg>
            </div>
            <h2 className={styles.missionTitle}>Our Vision</h2>
            <p>
              To inspire a completely new generation of thinkers by making chess accessible, undeniably competitive, and fundamentally enjoyable—developing creativity, leadership, and critical thinking along the way.
            </p>
          </div>

        </div>
      </section>

      {/* Philosophy Grid */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.philosophyHeader}>
            <h2 className={styles.sectionTitle}>The Philosophy</h2>
            <p className={styles.sectionSub}>The three pillars that hold up the RookHouse roof.</p>
          </div>
          
          <div className={styles.grid}>
            
            <div className={`${styles.card} ${styles.cardOrange}`}>
              <h3>Community First</h3>
              <p>Chess is inherently social. We design experiences, events, and spaces that unite people, pulling them away from screens to connect face-to-face over a board.</p>
            </div>
            
            <div className={`${styles.card} ${styles.cardPurple}`}>
              <h3>Accessible Brilliance</h3>
              <p>Whether you are 6 or 60, a 400-rated novice learning how the knight moves, or a 2000-rated veteran, there is always an open seat waiting for you here.</p>
            </div>
            
            <div className={`${styles.card} ${styles.cardMint}`}>
              <h3>Elevating the Game</h3>
              <p>Leveraging the internet chess boom and the inclusion of chess in grassroots FEASSA games, we are shifting the culture and nurturing world-class talent.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
