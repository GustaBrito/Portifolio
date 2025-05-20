import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { TimelineItem } from '../types';
import './Timeline.css';

interface TimelineProps { isDarkMode: boolean; }

const Timeline: React.FC<TimelineProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  // evita re‑criar array em cada render
  const items = useMemo(
    () => t('Timeline', { returnObjects: true }) as TimelineItem[],
    [t]
  );

  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="timeline" className={`timeline-section${isDarkMode ? ' dark' : ''}`}> 
      <div className="timeline-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="timeline-title"
        >
          {t('nav.timeline')}
        </motion.h2>

        <div className="timeline-grid-wrapper">
          <div className="timeline-line" aria-hidden="true" />

          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const alignedClass = isLeft ? 'timeline-item-left' : 'timeline-item-right';
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`timeline-item ${alignedClass}`}
                onMouseEnter={() => setSelectedId(item.id)}
                onMouseLeave={() => setSelectedId(null)}
              >
                <button
                  aria-label={`Selecionar ${item.title}`}
                  onClick={() => setSelectedId(prev => (prev === item.id ? null : item.id))}
                  className={`timeline-button ${selectedId === item.id ? 'selected' : ''}`}
                />

                <div className="timeline-item-content">
                  <span className="timeline-item-date">{item.date}</span>
                  <h3 className="timeline-item-title">{item.title}</h3>

                  {selectedId === item.id && (
                    <motion.p
                      key="desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="timeline-item-description"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;