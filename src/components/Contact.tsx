// Contact.tsx – versão completa (layout original) + adição de media‑queries para mobile
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

// Ícones
import gmailIcon from '../images/gmail.png';
import outlookIcon from '../images/outlook.png';
import linkedinIcon from '../images/linkedin.png';

interface ContactProps {
  isDarkMode: boolean;
}

type ContactMethod = 'gmail' | 'outlook' | 'linkedin';

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  // States
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState<ContactMethod>('gmail');

  const buildContactLink = (method: ContactMethod, name: string, message: string) => {
    const recipient = encodeURIComponent('gustavo.adra@gmail.com');
    const subject = encodeURIComponent(`Portifólio-Github: Mensagem de ${name}`);
    const body = encodeURIComponent(`Mensagem:\n${message}`);
    switch (method) {
      case 'gmail':
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
      case 'outlook':
        return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${recipient}&subject=${subject}&body=${body}`;
      default:
        return 'https://www.linkedin.com/in/gustavoag-brito/';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedContact !== 'linkedin') {
      window.open(buildContactLink(selectedContact, name, message), '_blank');
    }
  };

  const handleClearFields = () => {
    setName('');
    setFromEmail('');
    setMessage('');
  };

  const handleIconClick = (method: ContactMethod) => {
    setSelectedContact(method);
    handleClearFields();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 500);
  };

  // ————————————————————————————————————————————————————————————————
  // JSX
  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {t('contact.title')}
        </motion.h2>

        {/* Ícones */}
        <motion.div className="contact-icons" initial={false} animate={{}}>
          {([
            { id: 'gmail', icon: gmailIcon },
            { id: 'outlook', icon: outlookIcon },
            { id: 'linkedin', icon: linkedinIcon },
          ] as const).map(({ id, icon }) => (
            <button
              key={id}
              type="button"
              aria-label={id}
              className={`contact-icon ${selectedContact === id ? 'active' : ''}`}
              onClick={() => handleIconClick(id)}
            >
              <img src={icon} alt={id} />
            </button>
          ))}
        </motion.div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: false }}
        >
          <AnimatePresence mode="wait">
            {(selectedContact === 'gmail' || selectedContact === 'outlook') ? (
              <motion.div
                key={`mailFields-${selectedContact}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Nome */}
                <div className="contact-group">
                  <label htmlFor="name" className="contact-label">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="contact-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="contact-group">
                  <label htmlFor="email" className="contact-label">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="contact-input"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Mensagem */}
                <div className="contact-group">
                  <label htmlFor="message" className="contact-label">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="contact-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="linkedinField"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact-group">
                  <label htmlFor="message" className="contact-label">
                    Acesse o meu Perfil
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={10}
                    className="contact-input linkedin-message"
                    value="Para me mandar uma Mensagem, acesse o meu LinkedIn"
                    readOnly
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botões */}
          <div className="contact-button-group">
            {selectedContact === 'linkedin' ? (
              <>
                <button
                  type="button"
                  className="contact-button"
                  onClick={() => window.open(buildContactLink('linkedin', name, message), '_blank')}
                >
                  Clique aqui para acessar
                </button>
                <button type="button" className="contact-button" onClick={handleClearFields}>
                  Limpar
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="contact-button">
                  {t('contact.send')}
                </button>
                <button type="button" className="contact-button" onClick={handleClearFields}>
                  Limpar
                </button>
              </>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;