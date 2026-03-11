import Link from 'next/link';
import styles from './membership.module.css';

export const metadata = {
  title: 'Membership | RookHouse Chess',
  description: 'Join the RookHouse community for KES 500/month. Unlimited arcade access, tournaments, and more.',
};

export default function MembershipPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container text-center">
          <p className={styles.heroLabel}>MEMBERSHIP</p>
          <h1 className={styles.heroTitle}>
            Belong to the <em>community.</em>
          </h1>
          <p className={styles.heroSub}>
            Simple, accessible pricing. Build your rating, find your people.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard} style={{ backgroundColor: 'var(--color-pastel-mint)' }}>
              <div className={styles.cardHeader}>
                <h3>Community Pass</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>KES</span>
                  <span className={styles.amount}>500</span>
                  <span className={styles.period}>/month</span>
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Unlimited arcade walk-in access</li>
                <li>Access to the RookHouse Discord</li>
                <li>Discounted event and tournament entry</li>
                <li>Weekly community game nights</li>
                <li>Priority seating at the cafe</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Join the Society</Link>
            </div>

            <div className={`${styles.pricingCard} ${styles.premiumCard}`} style={{ backgroundColor: 'var(--color-pastel-purple)' }}>
              <div className={styles.cardHeader}>
                <h3>Academy Scholar</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>KES</span>
                  <span className={styles.amount}>5,000</span>
                  <span className={styles.period}>/term</span>
                </div>
              </div>
              <ul className={styles.featuresList}>
                <li>Everything in Community Pass</li>
                <li>Weekly structured coaching classes</li>
                <li>Term-end academy tournament</li>
                <li>Game analysis & progression tracking</li>
                <li>Ages 5-17</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', background: 'var(--color-bg)', color: 'var(--color-text)' }}>Enroll Student</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Questions?</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h4>Can I just walk in without a membership?</h4>
              <p>Yes, non-members pay a KES 300 walk-in fee for the day. Membership pays for itself in just two visits.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>How do I pay?</h4>
              <p>We accept M-Pesa. Once you sign up in person or via WhatsApp, we will send you the till number to activate your pass.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do I need to be good at chess?</h4>
              <p>Not at all. We have members who just learned how the pieces move yesterday. It&apos;s all about learning and playing casually.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
