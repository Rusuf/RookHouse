import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18v2H5v-2h4zM19 18v2h-4v-2h4z" />
                  <path d="M5 18h14v-3H5v3z" />
                  <path d="M7 15l1.5-6h7l1.5 6" />
                  <path d="M8 9h8V5H8v4z" />
                  <path d="M8 5v-2h2v2h4v-2h2v2" />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoTextRook}>ROOK</span>
                <span className={styles.logoTextHouse}>HOUSE</span>
              </div>
            </Link>
            <p className={styles.tagline}>
              Nairobi&apos;s premier chess community. Play. Learn. Compete. Connect.
            </p>
            <div className={styles.socials}>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>YouTube</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>TikTok</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>Instagram</a>
              <a href="https://discord.gg/rookhouse" target="_blank" rel="noopener noreferrer" aria-label="Discord" className={styles.socialLink}>Discord</a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Explore</h4>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/arcade" className={styles.link}>The Arcade</Link>
              <Link href="/streaming" className={styles.link}>Watch Live</Link>
              <Link href="/events" className={styles.link}>Events</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Programs</h4>
              <Link href="/academy" className={styles.link}>Chess Academy</Link>
              <Link href="/membership" className={styles.link}>Membership</Link>
              <Link href="/contact" className={styles.link}>Corporate</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <Link href="/contact" className={styles.link}>Contact Us</Link>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
              <a href="mailto:hello@rookhouse.co.ke" className={styles.link}>Email</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} RookHouse Chess. All rights reserved.</p>
          <p className={styles.made}>Made with ♟ in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
