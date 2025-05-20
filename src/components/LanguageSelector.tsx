/* LanguageSelector.tsx */
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';
import MouseTracker from './MouseTracker';
import RainOverlay from './RainOverlay';
import ParticlesBackground from './ParticlesBackground';

interface Props {
  onLanguageSelect: (lang: string) => void;
}

const LanguageSelector: React.FC<Props> = ({ onLanguageSelect }) => {
  const { t } = useTranslation();
  const [showRain, setShowRain] = useState(false);
  const timeoutRef = useRef<number>();

  /* limpa timeout se o usuário sair da tela antes de 1,5 s */
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const triggerLanguage = (lang: string) => {
    if (showRain) return;                // previne cliques duplos
    setShowRain(true);
    timeoutRef.current = window.setTimeout(() => {
      onLanguageSelect(lang);
      setShowRain(false);                // se voltar para essa tela
    }, 1500);
  };

  return (
    <div className="language-selector-container">
      <ParticlesBackground />
      <RainOverlay isActive={showRain} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="language-selector-card"
      >
        <MouseTracker />

        <h1 className="language-selector-title">{t('welcome.title')}</h1>
        <p className="language-selector-subtitle">{t('welcome.selectLanguage')}</p>

        <div className="language-selector-buttons">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => triggerLanguage('pt')}
            onTouchEnd={() => triggerLanguage('pt')}
            className="language-selector-button"
            disabled={showRain}
            aria-label="Selecionar Português"
          >
            Português
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => triggerLanguage('en')}
            onTouchEnd={() => triggerLanguage('en')}   
            className="language-selector-button secondary"
            disabled={showRain}
            aria-label="Select English"
          >
            English
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;
