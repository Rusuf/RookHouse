'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={styles.page}>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactWrapper}>
            
            {/* Left Info Column */}
            <div className={styles.infoCol}>
              <h1 className={styles.title}>Tupige stori za chess.</h1>
              <p className={styles.desc}>
                Whether you want to join the society, enroll in the academy, or just drop by for a game — tuko hapa (we are here for it).
              </p>
              
              <div className={styles.methods}>
                <div className={styles.method}>
                  <h4>Visit the Arcade</h4>
                  <p>Westlands, Nairobi, Kenya<br/>Walk-ins welcome daily.</p>
                </div>
                <div className={styles.method}>
                  <h4>Contact</h4>
                  <p>
                    <a href="mailto:hello@rookhouse.co.ke">hello@rookhouse.co.ke</a><br/>
                    <a href="tel:+254700000000">+254 700 000 000</a>
                  </p>
                </div>
              </div>

              <div className={styles.socialsBlock}>
                <h4>Follow Our Journey</h4>
                <div className={styles.socialIcons}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><path d="M15 8a4 4 0 1 0 0-4"></path><path d="M15 8v8a4 4 0 0 1-4 4"></path></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                     <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path><polygon points="10 15 15 12 10 9 10 15"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className={styles.formCol}>
              <form className={styles.form} onSubmit={handleSubmit}>
                {submitted ? (
                  <div className={styles.successMsg}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Message Sent</h3>
                    <p>Thanks for reaching out! We&apos;ll be in touch very soon.</p>
                  </div>
                ) : (
                  <>
                    <h2 className={styles.formTitle}>Send a Message</h2>
                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                          id="name" type="text"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email" type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="subject">Topic</label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="membership">Membership</option>
                        <option value="academy">Academy Enrollment</option>
                        <option value="events">Events & Tournaments</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message" rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
