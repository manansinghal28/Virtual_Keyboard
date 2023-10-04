import React, { useState } from 'react';
import './Keyboard.css';
const Key = ({ label, onClick }) => {
    return (
      <button className="key" onClick={() => onClick(label)}>
        {label}
      </button>
    );
  };
  const Keyboard = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('english'); 
    const [inputText, setInputText] = useState(''); 
    const [capsLock, setCapsLock] = useState(false); 
    const [englishLowercaseLayout, setEnglishLowercaseLayout] = useState(true); 
    const handleLanguageChange = (e) => {
      setSelectedLanguage(e.target.value);
    };
  
    const handleKeyClick = (key) => {
      if (key === '⌫') {
        setInputText(inputText.slice(0, -1));
      } else if (key === 'Space') {
        setInputText(inputText + ' ');
      } else if (key === 'CapsLk') {
        setCapsLock(!capsLock);
        if (selectedLanguage === 'english') {
          setEnglishLowercaseLayout(!englishLowercaseLayout);
        }
      } else if (key === 'Reset') {
        setInputText('');
      } else if (key === 'Enter') {
        setInputText(inputText + '\n');
      }else {
        if (selectedLanguage === 'english') {
          if (englishLowercaseLayout) {
            setInputText(inputText + key.toLowerCase());
          } else {
            setInputText(inputText + (capsLock ? key.toUpperCase() : key.toLowerCase()));
          }
        } else {
          setInputText(inputText + (capsLock ? key.toUpperCase() : key.toLowerCase()));
        }
      }
    };
      const keyboardLayouts = {
      english: {
        lowercase: [
          ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0','=','⌫'],
          ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','{','}'],
          ['CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',':','"','Enter'],
          ['z', 'x', 'c', 'v', 'b', 'n', 'm',',','.'],
          ['Space', 'Reset'],
        ],
        uppercase: [
          ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0','=','⌫'],
          ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','{','}'],
          ['CapsLk', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',':','"','Enter'],
          ['Z', 'X', 'C', 'V', 'B', 'N', 'M',',','.' ],
          ['Space', 'Reset'],
        ],
      },
      hindi: {
        lowercase: [
            ['`','१', '२', '३', '४', '५', '६', '७', '८', '९', '०','=','⌫'],
            ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ','{','}'],
            ['CapsLk', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',':','"','Enter'],
            ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल',',','.'],
            ['Space', 'Reset'],
          ],
          uppercase: [
            ['`','१', '२', '३', '४', '५', '६', '७', '८', '९', '०','=','⌫'],
            ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ','{','}'],
            ['CapsLk', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न',':','"','Enter'],
            ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल',',','.' ],
            ['Space', 'Reset'],
          ],
        },
        telugu: {
          lowercase: [
            ['`','౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯', '౦','=','⌫'],
            ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ','{','}'],
            ['CapsLk', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న',':','"','Enter'],
            ['ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల',',','.'],
            ['Space', 'Reset'],
          ],
          uppercase: [
            ['`','౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯', '౦','=','⌫'],
            ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ','{','}'],
            ['CapsLk', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న',':','"','Enter'],
            ['ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల',',','.' ],
            ['Space', 'Reset'],
          ],
        },
    }; 
    const currentLayout = keyboardLayouts[selectedLanguage][
      englishLowercaseLayout ? 'lowercase' : 'uppercase'
    ];  
    return (
        <div className="keyboard-container">
               <h1>Virtual Keyboard</h1>
          <div className="language-dropdown">
            <label htmlFor="languageSelect">Select your language: </label>
            <select
              id="languageSelect"
              value={selectedLanguage}
              onChange={handleLanguageChange}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="telugu">Telugu</option>
            </select>
          </div>
          <br></br>
          <textarea
            className="input-text"
            value={inputText}
            readOnly 
            placeholder="Type here..."/>
          {currentLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="keyboard-row">
              {row.map((key, keyIndex) => (
                <Key
                  key={keyIndex}
                  label={key}
                  onClick={() => handleKeyClick(key)}
                  className={`key ${key === 'CapsLock' ? 'CapsLock' : ''}`}/>
              ))}
            </div>))}</div>);
}
 export default Keyboard;