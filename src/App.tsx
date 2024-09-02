import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import LanguageButton from './components/LanguageButton';
const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

function App() {
  const [language, setLanguage] = useState('en'); // default language

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {i18n.t('welcome')}
          </p>
        
          <LanguageButton selected={language} languages={languages} method={handleLanguageChange}></LanguageButton>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n.t('learnReact')}
          </a>
        </header>
      </div>
    </I18nextProvider>
  );
}

export default App;
