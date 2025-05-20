import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';
import './Projects.css';

interface ProjectsProps { isDarkMode: boolean; }

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  // memoiza lista para não recomputar
  const projects = useMemo(
    () => t('Projects', { returnObjects: true }) as Project[],
    [t]
  );

  return (
    <section id="projects" className={`projects-section${isDarkMode ? ' dark' : ''}`}>
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="projects-grid">
          {projects.map(project => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
              />

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Demo ${project.title}`}
                      className="project-link project-link-demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('projects.viewDemo')}</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Código ${project.title}`}
                      className="project-link project-link-code"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t('projects.viewCode')}</span>
                    </a>
                  )}
                </div>

                {project.badges && (
                  <div className="project-badges">
                    {project.badges.map((src, idx) => (
                      <img key={idx} src={src} alt={"badge"} className="badge-image" loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;