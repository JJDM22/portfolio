// languageSwitcher.tsx
import React from 'react';

interface LanguageSwitcherProps {
  languages: { code: string; label: string }[];
  method: Function;
  selected: string;
}

const LanguageButton = ({ languages, method }: LanguageSwitcherProps) => {
  
  return (
    <div>
      {languages.map((lang) => (
        <button
          className='LanguageButton'
          key={lang.code}
          value={lang.code}
          onClick={(e)=>{method(lang.code)}}
          >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageButton;