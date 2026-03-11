'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.leftNav}>
          <Link href="/arcade" className={styles.navLink}>The Arcade</Link>
          <Link href="/about" className={styles.navLink}>The Society</Link>
          <Link href="/membership" className={styles.navLink}>Membership</Link>
        </nav>

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
            <span className={styles.logoTextFull}>ROOKHOUSE</span>
          </div>
        </Link>

        <div className={styles.rightNav}>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          <p className={styles.mobileMenuLabel}>Navigation</p>
          <Link href="/arcade" className={styles.mobileLink}>The Arcade</Link>
          <Link href="/about" className={styles.mobileLink}>The Society</Link>
          <Link href="/membership" className={styles.mobileLink}>Membership</Link>
          
          <p className={styles.mobileMenuLabel} style={{ marginTop: 24 }}>Programs</p>
          <Link href="/academy" className={styles.mobileLink}>Academy</Link>
          <Link href="/events" className={styles.mobileLink}>Events</Link>
          <Link href="/streaming" className={styles.mobileLink}>Streaming</Link>
          <Link href="/contact" className={styles.mobileLink}>Contact</Link>
        </div>
      </div>
    </header>
  );
}
