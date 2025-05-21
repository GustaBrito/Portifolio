// Portfolio.tsx – navbar 3-por-2 em telas pequenas
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import './Portfolio.css';                       // mantém todos os overrides
import profileImage from '../images/Portfolio.jpeg';
import profileImageBack from '../images/PortifolioLego.png';

/* ------------ chaves de navegação ------------ */
const navKeys = ['return', 'about', 'timeline', 'projects', 'contact'] as const;
type NavKey = typeof navKeys[number];

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  /* ---------------- tema ---------------- */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return (
    <div className="portfolio-container">
      {/* ================= NAV ================= */}
      <header className="portfolio-nav">
        <div className="portfolio-nav-inner">
          {/* links (sempre visíveis) */}
          <nav className="portfolio-nav-links">
            {navKeys.map((key: NavKey) => (
                  <a
                  key={key}
                  href={key === 'return' ? 'https://gustabrito.github.io/Portifolio/' : `#${key}`}
                  className="portfolio-nav-link"
                >
                  {t(`nav.${key}` as `nav.return`)}
                </a>
            ))}
          </nav>

          {/* botão tema */}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className="portfolio-toggle-button"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ================ ABOUT ================ */}
      <section id="about" className="portfolio-about-section">
        <div className="portfolio-about-container">
          <div className="portfolio-about-content">
            {/* avatar flip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="portfolio-about-image"
            >
              <div className="flip-card-inner">
                <img src={profileImage}  alt="Profile front" className="flip-card-front" loading="lazy" />
                <img src={profileImageBack} alt="Profile back"  className="flip-card-back"  loading="lazy" />
              </div>
            </motion.div>

            {/* texto */}
            <div className="portfolio-about-text">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="portfolio-about-title"
              >
                {t('about.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="portfolio-about-description"
              >
                {t('about.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="portfolio-social"
              >
                <a
                  href="https://linkedin.com/in/gustavoag-brito"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  className="portfolio-social-link linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/GustaBrito"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  className="portfolio-social-link github"
                >
                  <Github className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== DEMAIS SEÇÕES ==== */}
      <Timeline  isDarkMode={isDarkMode} />
      <Projects  isDarkMode={isDarkMode} />
      <Contact   isDarkMode={isDarkMode} />
    </div>
  );
};

export default Portfolio;
