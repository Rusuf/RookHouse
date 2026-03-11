'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BackButton.module.css';

export default function BackButton() {
  const pathname = usePathname();

  // Don't show on the homepage
  if (pathname === '/') return null;

  return (
    <Link 
      href="/"
      className={styles.backButton}
      aria-label="Back to Home"
      title="Back to Home"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19L5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
