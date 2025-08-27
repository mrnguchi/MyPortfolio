'use client';
import React, { useState } from "react";
import styles from "../styles/AboutSection.module.css";
import { FiBook, FiCode, FiChevronDown, FiChevronUp } from "react-icons/fi";

const AboutSection = () => {
  const [showMoreEducation, setShowMoreEducation] = useState(false);

  const toggleEducation = () => {
    setShowMoreEducation(!showMoreEducation);
  };

  return (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          About <span className={styles.highlight}>Me</span>
        </h2>
        <p className={styles.description}>
          I'm a 22-year-old software developer with an HND in Software Engineering, currently
          completing my Bachelor's at the University of Buea. I'm passionate about building
          practical solutions through technology and continuously learning from the fast-changing
          trends in the tech world.
        </p>
      </div>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
      {/* Education Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.iconWrapper}>
            <FiBook />
          </div>
          <h3 className={styles.sectionTitle}>Education</h3>
        </div>

        <div className={styles.educationList}>
          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h4 className={styles.degree}>Bachelor's in Software Engineering</h4>
              <span className={styles.status + ' ' + styles.ongoing}>Ongoing</span>
            </div>
            <p className={styles.institution}>College of Technology, University of Buea</p>
            <p className={styles.duration}>2024 – 2026</p>
          </div>

          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h4 className={styles.degree}>HND in Software Engineering</h4>
              <span className={styles.status + ' ' + styles.completed}>Completed</span>
            </div>
            <p className={styles.institution}>College of Technology, University of Buea</p>
            <p className={styles.duration}>2022 – 2024</p>
          </div>

          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h4 className={styles.degree}>Advanced Level</h4>
              <span className={styles.status + ' ' + styles.completed}>Completed</span>
            </div>
            <p className={styles.institution}>GBHS Bojongo, Douala</p>
            <p className={styles.duration}>2020 – 2022</p>
          </div>

          {/* Conditionally rendered Ordinary Level card - appears ABOVE the button */}
          {showMoreEducation && (
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h4 className={styles.degree}>Ordinary Level</h4>
                <span className={styles.status + ' ' + styles.completed}>Completed</span>
              </div>
              <p className={styles.institution}>BHS Bojongo, Douala</p>
              <p className={styles.duration}>2018 – 2020</p>
            </div>
          )}

          {/* Toggle Button - stays in the same position */}
          <button className={styles.toggleButton} onClick={toggleEducation}>
            {showMoreEducation ? (
              <>
                <span>View Less</span>
                <FiChevronUp />
              </>
            ) : (
              <>
                <span>View More</span>
                <FiChevronDown />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.iconWrapper}>
            <FiCode />
          </div>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h4 className={styles.categoryTitle}>Frontend</h4>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>React Native</span>
              <span className={styles.skillTag}>Next.js</span>
              <span className={styles.skillTag}>Tailwind CSS</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4 className={styles.categoryTitle}>Backend</h4>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Node.js</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4 className={styles.categoryTitle}>Languages</h4>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>C++</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default AboutSection;