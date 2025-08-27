'use client';
import React, { useState } from "react";
import styles from "../styles/ContactSection.module.css";
import emailjs from "emailjs-com"; 
const ContactSection = () => {

  
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o01y84p",   
        "template_vr0vpcc",  
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "xVq2Hu6mQsvA0s7if"    
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Oops! Something went wrong.");
        }
      ); 
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "237672491424";
    const message = "Hello! I'm interested in discussing a project with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroIcon}>💡</span>
            <h2 className={styles.heroTitle}>Got A Project! Let's Talk</h2>
            <p className={styles.heroDescription}>
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
              I'm here to help turn your vision into reality.
            </p>
            <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
              <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContent}>
          {/* Header Section */}
          <div className={styles.contactHeader}>
            <h3 className={styles.contactTitle}>Let's Connect</h3>
            <p className={styles.contactDescription}>
              I'm always open to discussing new opportunities, collaborating on exciting 
              projects, or simply chatting about technology and innovation.
            </p>
          </div>

          {/* Main Content Section */}
          <div className={styles.contactMain}>
            {/* Left Side - Contact Info */}
            <div className={styles.contactLeft}>
              <div className={styles.contactCards}>
                <a href="mailto:munohnguchi334@gmail.com" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>Email</span>
                    <span className={styles.contactCardValue}>munohnguchi334@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+237672491424" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>Phone</span>
                    <span className={styles.contactCardValue}>+237 672 491 424</span>
                  </div>
                </a>

                <a href="tel:+237677268983" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>Alternative</span>
                    <span className={styles.contactCardValue}>+237 677 268 983</span>
                  </div>
                </a>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>Location</span>
                    <span className={styles.contactCardValue}>Buea, Cameroon</span>
                  </div>
                </div>

                <a href="https://github.com/mrnguchi" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>GitHub</span>
                    <span className={styles.contactCardValue}>mr nguchi</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/munoh-nguchi-25a988227/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className={styles.contactCardContent}>
                    <span className={styles.contactCardLabel}>LinkedIn</span>
                    <span className={styles.contactCardValue}>munoh nguchi</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={styles.contactRight}>
              <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      value={form.name}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                    />
                    <label className={styles.formLabel}>Full Name</label>
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      value={form.email}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                    />
                    <label className={styles.formLabel}>Email Address</label>
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      name="message"
                      placeholder=" "
                      value={form.message}
                      onChange={handleFormChange}
                      className={styles.formTextarea}
                      required
                    />
                    <label className={styles.formLabel}>Message</label>
                  </div>

                  <button type="submit" className={styles.sendButton}>
                    <svg className={styles.sendIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Send Message
                  </button>
                </form>

                <p className={styles.responseTime}>
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
