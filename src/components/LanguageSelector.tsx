import React, {useState} from 'react';
import {Globe} from 'lucide-react';
import {useTranslation} from "react-i18next";

const languages = [
    {code: 'tr', name: 'Türkçe'},
    {code: 'en', name: 'English'},
];

const LanguageSelector: React.FC = () => {

    const {i18n} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (language: typeof languages[0]) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        i18n.changeLanguage(language.code).then();
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 bg-red-200 bg-opacity-10 text-white px-4 py-2 rounded-full shadow-lg hover:bg-dark-purple transition-colors duration-200"
                >
                    <Globe size={20} color={"#FFD4B0"}/>
                    <span className="text-gold">{selectedLanguage.code.toUpperCase()}</span>
                </button>
                {isOpen && (
                    <div className="absolute bottom-full right-0 mb-2 bg-red-200 bg-opacity-10 rounded-lg shadow-lg overflow-hidden">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => selectLanguage(lang)}
                                className="block w-full text-left px-4 py-2 text-bronze hover:bg-dark-purple transition-colors duration-200"
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
