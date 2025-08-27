'use client';
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/PortfolioSection.module.css";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

// Import project images
import smartEngineeringImg from "../assets/smart-engineering.png";
import easyLearnImg from "../assets/easylearn.png";
import skillLinkImg from "../assets/skillLink.jpg";
import commodityPredictorImg from "../assets/data-analytics.jpg";
import dineDashImg from "../assets/dine-dash.png";
import ywamUiImg from "../assets/ywam.jpg";
import showupImg from "../assets/showup.png";
import feastifyImg from "../assets/feastify.png";

const projects = [
  {
    title: "Smart Engineering Web App",
    description: "A complete platform for a construction company, built and deployed with a team.",
    tech: ["Next js", "Tailwind"],
    image: smartEngineeringImg,
    github: "https://github.com/softnovan/smart-engineering",
    liveUrl: "https://www.smartengineeringcm.com/", 
    isPublished: true,
  },
  {
    title: "EasyLearn App",
    description: "An ongoing mobile learning platform using React Native.",
    tech: ["React Native", "Firebase"],
    image: easyLearnImg,
    github: "https://github.com/softnovan/easy-learn", 
    liveUrl: null,
    isPublished: false,
  },
  {
    title: "SkillLink Platform",
    description: "A job-hunting web app with modern DevOps workflow and backend integration.",
    tech: ["Next.js", "Tailwind", "Jenkins","Docker"],
    image: skillLinkImg,
    github: "https://github.com/clovis739/SkillLink", 
    liveUrl: "https://skilllink-platform.com", 
    isPublished: true,
  },
  {
    title: "Commodity Price Predictor",
    description: "A data science tool using machine learning for agricultural forecasting.",
    tech: ["Python", "scikit-learn"],
    image: commodityPredictorImg,
    github: "https://github.com/yourusername/commodity-predictor", 
    liveUrl: null,
    isPublished: false,
  },
  {
    title: "Dine Dash",
    description: "A solo Flutter app for restaurant services (school project).",
    tech: ["Flutter", "Firebase"],
    image: dineDashImg,
    github: "https://github.com/mrnguchi/Dine-Dash", 
    liveUrl: null,
    isPublished: false,
  },
  {
    title: "YWAM NGO Website UI",
    description: "A UI/UX design project using Figma and frontend tools.",
    tech: ["Figma"],
    image: ywamUiImg,
    github: "https://www.figma.com/design/VVE4dftZUIQ9Gxg5ibPUHt/university-of-nations?m=auto&t=eyHowvFNPo16j6mD-6",
    liveUrl: null,
    isPublished: true,
    isDesignProject: true,
  },
  {
    title: "SHOWUP", 
    description: "A booking system worked on as a team member while on internship at LoopTech Ltd", // Replace with actual description
    tech: ["HTML", "js", "Bootstrap", "Flask"],
    image: showupImg,
    github: "https://github.com/Loop-Technologies/showup_backend",
    liveUrl: null,
    isPublished: false,
  },
  {
    title: "FEASTIFY", 
    description: "A school project for a recipe sharing platform for mainly cameroonian delicacies", // Replace with actual description
    tech: ["Next.js", "Tailwind"], 
    image: feastifyImg,
    github: "https://github.com/yourusername/project8", 
    liveUrl: null,
    isPublished: false,
  },
];

const PortfolioSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const toggleProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  
  const visibleProjects = showMoreProjects ? projects : projects.slice(0, 6);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            My <span className={styles.highlight}>Portfolio</span>
          </h2>
          <p className={styles.description}>
            A collection of projects showcasing my skills in web development, mobile apps,
            and UI/UX design. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={project.image}
              alt={project.title}
              className={styles.image}
              width={400}
              height={180}
            />
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.bottomSection}>
                <div className={styles.techStack}>
                  {project.tech.map((techItem, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className={styles.buttonGroup}>
                  {/* GitHub/Figma Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                    aria-label={project.isDesignProject ? "View design on Figma" : "View source code on GitHub"}
                  >
                    {project.isDesignProject ? <FaFigma /> : <FiGithub />}
                    <span className={styles.tooltip}>
                      {project.isDesignProject ? "View Design" : "View Code"}
                    </span>
                  </a>

                  {/* View Project Button */}
                  {project.isPublished && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.projectButton}`}
                      aria-label="View live project"
                    >
                      <FiExternalLink />
                      <span className={styles.tooltip}>View Project</span>
                    </a>
                  ) : (
                    <div className={`${styles.actionButton} ${styles.projectButton} ${styles.disabled}`}>
                      <FiExternalLink />
                      <span className={styles.tooltip}>Not Published</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {projects.length > 6 && (
        <button className={styles.viewMoreButton} onClick={toggleProjects}>
          {showMoreProjects ? (
            <>
              <span>View Less</span>
              <FiChevronUp />
            </>
          ) : (
            <>
              <span>View More Projects</span>
              <FiChevronDown />
            </>
          )}
        </button>
      )}
    </div>
  </section>
  );
};

export default PortfolioSection;