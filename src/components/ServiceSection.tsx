'use client';
import React from "react";
import styles from "../styles/ServicesSection.module.css";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with Figma prototypes, wireframes, and complete design systems that enhance user experience.",
    icon: "design",
    iconColor: "golden",
    features: [
      "Figma Prototypes",
      "User Interface Design",
      "Wireframing",
      "Design Systems",
      "User Experience Optimization"
    ],
    status: "Available",
    statusColor: "green"
  },
  {
    title: "Web Development",
    description: "Building modern, responsive web applications using cutting-edge technologies like Next.js, React, and Python with robust backend integration.",
    icon: "webdev",
    iconColor: "darkblue",
    features: [
      "Full-Stack Development",
      "React & Next.js",
      "Wordpress",
      "Python Backend",
      "Database Management",
      "API Integration"
    ],
    status: "Available",
    statusColor: "green"
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using React Native and Flutter, ensuring seamless performance across iOS and Android.",
    icon: "mobile",
    iconColor: "golden",
    features: [
      "React Native Apps",
      "Flutter Development",
      "Cross-Platform Solutions",
      "iOS & Android",
      "Mobile UI/UX"
    ],
    status: "Available",
    statusColor: "green"
  },
  {
    title: "Data Analysis",
    description: "Providing data-driven insights through machine learning and analytical tools, creating prototypes and academic-level data analysis projects.",
    icon: "data",
    iconColor: "darkblue",
    features: [
      "Machine Learning Models",
      "Data Visualization",
      "Python Analytics",
      "Statistical Analysis"
    ],
    status: "Available",
    statusColor: "green"
  },
];

const ServicesSection = () => (
  <section id="services" className={styles.services}>
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          My <span className={styles.highlight}>Services</span>
        </h2>
        <p className={styles.description}>
          I offer comprehensive software development services, from designing user-friendly interfaces
          to building scalable web applications and architecting robust system solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {/* Header with Icon and Title */}
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles[service.iconColor]}`}>
                <div className={`${styles.icon} ${styles[service.icon]}`}></div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>

            {/* Description */}
            <p className={styles.serviceDescription}>{service.description}</p>

            {/* Features List */}
            <ul className={styles.featuresList}>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  <span className={styles.bulletPoint}></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Status */}
            <div className={styles.statusWrapper}>
              <span className={styles.statusLabel}>Available for projects</span>
              <span className={`${styles.statusBadge} ${styles[service.statusColor]}`}>
                {service.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;