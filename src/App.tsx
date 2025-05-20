import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import Portfolio from './components/Portfolio';

import './i18n';

function App() {
  const { i18n } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState(false);

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageSelected(true);
  };

  return (
    <>
    
      {!languageSelected ? (
        
        <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        
      ) : (
        
        <Portfolio />
      )}
    </>
  );
}

export default App;