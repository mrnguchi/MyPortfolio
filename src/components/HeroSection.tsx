'use client';
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import { FiChevronRight, FiDownload, FiStar, FiZap, FiChevronLeft, FiMenu, FiHome, FiUser, FiBriefcase, FiMail, FiX } from "react-icons/fi";
import { SiReact, SiPython } from "react-icons/si";
import profile from "../assets/profile-image.png"; 

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Home', href: '#home', icon: <FiHome /> },
    { label: 'About', href: '#about', icon: <FiUser /> },
    { label: 'Portfolio', href: '#portfolio', icon: <FiBriefcase /> },
    { label: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  return (
  <section id="home" className={styles.hero}>
    {/* Background particles */}
    <div className={styles.particles}>
      {[...Array(12)].map((_, i) => (
        <span key={i} className={`${styles.particle} ${styles[`particle${i}`]}`}></span>
      ))}
    </div>
    {/* Top badge */}
    <div className={styles.topBadge}>
      <span>👋 Hello, I’m Munoh Nguchi Nwambou</span>
      <span className={styles.badgeStar}>★</span>
    </div>
    {/* Menu button with dropdown */}
    <div className={styles.menuContainer} ref={menuRef}>
      <button
        className={styles.menuButton}
        aria-label="Menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
        <span>Menu</span>
      </button>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownContent}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={styles.dropdownItem}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.dropdownIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className={styles.container}>
      {/* Left column */}
      <div className={styles.left}>
        <div className={styles.headlineBlock}>
          <h1 className={styles.headline}>
            <span className={styles.software}>Software</span>
            <br />
            <span className={styles.developer}>Developer</span>
          </h1>
          <div className={styles.roles}>
            <span className={styles.role}>
              <span className={styles.roleIcon}>&lt;&gt;</span> UI/UX Designer
            </span>
            <span className={styles.role}>
              <span className={styles.roleIcon} style={{ color: "#FFD56A" }}>⚡</span> Mobile Developer
            </span>
          </div>
        </div>
        <div className={styles.paragraphBlock}>
          <div className={styles.accentBar}></div>
          <p className={styles.paragraph}>
            Building practical, impactful solutions through code.<br />
            Passionate about creating technology that makes a difference in people’s lives.
          </p>
        </div>
        <div className={styles.ctas}>
          <a href="#portfolio" className={styles.primaryBtn}>
            View My Work <FiChevronRight className={styles.ctaIcon} />
          </a>
          <a href="/MunohNguchi_CV.pdf" download className={styles.secondaryBtn}>
            <FiDownload className={styles.ctaIconLeft} /> Download CV
          </a>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>3+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Dedication</span>
          </div>
        </div>
      </div>
      {/* Right column */}
      <div className={styles.right}>
        <div className={styles.portraitFrame}>
          {/* Halo glows */}
          <div className={styles.haloGlow1}></div>
          <div className={styles.haloGlow2}></div>
          {/* Light yellow rim */}
          <div className={styles.thinGoldRim}></div>
          {/* Portrait */}
          <Image
            src={profile}
            alt="Munoh Nguchi"
            className={styles.portrait}
            width={440}
            height={440}
            priority
          />
          {/* Skill chips */}
          <span className={styles.skillChipReact}>
            React
            <SiReact style={{ marginLeft: 4, marginTop:2.5, verticalAlign: "middle", color: "#61DAFB" }} />
          </span>
          <span className={styles.skillChipPython}>
            Python
            <SiPython style={{ marginLeft:4, marginTop:2.5, verticalAlign: "middle", color: "#3776AB" }} />
          </span>
          {/* Floating icon buttons */}
          <button className={styles.iconBtnStar} aria-label="Bookmark">
            <FiStar />
          </button>
          <button className={styles.iconBtnZap} aria-label="Lightning">
            <FiZap />
          </button>
        </div>
      </div>
    </div>
    {/* Scroll indicator */}
    <div className={styles.scrollIndicator}>
      <div className={styles.mouseOutline}>
        <div className={styles.mouseDot}></div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;