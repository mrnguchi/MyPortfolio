'use client';
import React from "react";
import styles from "../styles/Footer.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Section - Name and Description */}
        <div className={styles.leftSection}>
          <h3 className={styles.name}>Munoh Nguchi</h3>
          <p className={styles.description}>
            Software Developer passionate about building practical, impactful solutions through technology.
          </p>
          <div className={styles.socialIcons}>
            <a href="mailto:munohnguchi334@gmail.com" aria-label="Email" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://github.com/mrnguchi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="tel:+237672491424" aria-label="Phone" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className={styles.middleSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <nav className={styles.quickLinks}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className={styles.quickLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section - Get In Touch */}
        <div className={styles.rightSection}>
          <h4 className={styles.sectionTitle}>Get In Touch</h4>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>munohnguchi334@gmail.com</p>
            <p className={styles.contactItem}>+237 672 491 424</p>
            <p className={styles.contactItem}>+237 677 268 983</p>
            <p className={styles.contactItem}>Buea, Cameroon</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © 2025 Munoh Nguchi Nwambou. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
