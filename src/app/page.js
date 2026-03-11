'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef();

  useGSAP(() => {
    // Hero Entrance Animations
    gsap.from('.gs-reveal-up', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1
    });

    // Gallery Stagger Entrance
    gsap.from('.gs-gallery-item', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.4
    });

    // Scroll Animations for Manifesto text
    gsap.from('.gs-scroll-reveal', {
      scrollTrigger: {
        trigger: '.gs-scroll-reveal',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Scroll Animations for Details Grid
    gsap.from('.gs-scroll-card', {
      scrollTrigger: {
        trigger: '.gs-scroll-card',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <div className={styles.page} ref={container}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTop}>
            <p className={`${styles.heroLabel} gs-reveal-up`}>COMMUNITY CHESS CLUB</p>
            <h1 className={`${styles.heroTitle} gs-reveal-up`}>
              A home for the game.<br />
              Rooted here, <em>open to all.</em><br />
              Karibu to the calm side of chess.
            </h1>
            <div className={`${styles.heroAction} gs-reveal-up`}>
              <Link href="/membership" className="btn btn-primary">
                Approach the board
              </Link>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={`${styles.galleryCol} ${styles.col1} gs-gallery-item`}>
              <div className={styles.imageWrapper}>
                <Image src="https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=600&auto=format&fit=crop" alt="Kids playing chess" fill className={styles.img} priority />
              </div>
            </div>
            <div className={`${styles.galleryCol} ${styles.col2} gs-gallery-item`}>
              <div className={styles.imageWrapper}>
                <Image src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=600&auto=format&fit=crop" alt="Professional chess pieces" fill className={styles.img} priority />
              </div>
            </div>
            <div className={`${styles.galleryCol} ${styles.col3} gs-gallery-item`}>
              <div className={styles.imageWrapper}>
                <Image src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=600&auto=format&fit=crop" alt="Chess club atmosphere" fill className={styles.img} priority />
              </div>
            </div>
            <div className={`${styles.galleryCol} ${styles.col4} gs-gallery-item`}>
              <div className={styles.imageWrapper}>
                <Image src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=600&auto=format&fit=crop" alt="People at chess club" fill className={styles.img} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className="container">
          <h2 className={`${styles.manifestoText} gs-scroll-reveal`}>
            We are a chess home in Upper Kabete, Nairobi. Built for Everyone ~<span>students, kids</span> . Bring your passion. Find your board.
          </h2>

          <div className={styles.detailsGrid}>
            <div className={`${styles.detailCard} gs-scroll-card`}>
              <h3>KES 500 / Month</h3>
              <p>Unlimited arcade access. That&apos;s less than a meal for an entire month of community chess. Fika tutawale board.</p>
              <Link href="/membership" className={styles.link}>View Memberships &rarr;</Link>
            </div>
            <div className={`${styles.detailCard} gs-scroll-card`}>
              <h3>Community First</h3>
              <p>Weekly blitz nights, holiday camps for kids, and campus challenges. Everything chess, under one roof.</p>
              <Link href="/events" className={styles.link}>View Events &rarr;</Link>
            </div>
            <div className={`${styles.detailCard} gs-scroll-card`}>
              <h3>Discord & Content</h3>
              <p>Can&apos;t make it to the arcade? Join our Discord to play games online, submit for review, and chat.</p>
              <a href="https://discord.gg/rookhouse" target="_blank" rel="noopener noreferrer" className={styles.link}>Join Discord &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
