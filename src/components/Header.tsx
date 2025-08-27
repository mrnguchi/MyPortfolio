'use client';
import React, { useState } from "react";
import styles from "../styles/HeroSection.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.floatingHeader}>
        <ul>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.menuBtn} onClick={() => setOpen(true)} aria-label="Menu">
          <FiMenu />
        </button>
      </nav>
      {open && (
        <div className={styles.offcanvas}>
          <button className={styles.offcanvasClose} onClick={() => setOpen(false)} aria-label="Close">
            <FiX />
          </button>
          <nav className={styles.offcanvasNav}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;