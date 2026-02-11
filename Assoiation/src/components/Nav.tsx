import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Map language codes to display names
  const languages: { [key: string]: string } = {
    en: 'English',
    da: 'Dari',
    ps: 'Pashto'
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-[20px] mt-4 md:mt-[20px]">
      <div className="bg-[#0B1222]/90 backdrop-blur-xl text-white py-3 md:py-4 flex items-center justify-between rounded-[10px] px-4 md:px-[60px] border border-blue-500/10 shadow-lg shadow-blue-900/10 relative">
        {/* Left: Association Name */}
        <Link to="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/10">
            <img 
              className="w-full h-full object-cover" 
              src="/images/logo.jpeg" 
              alt="Logo"
              style={{ maskImage: 'radial-gradient(circle, black 68%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 68%, transparent 70%)' }}
            />
          </div>
          ASSOCIATION
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-[#FACC15] transition-colors">{t('home')}</Link>
          </li>
          <li>
            <Link to="/members" className="hover:text-[#FACC15] transition-colors">{t('companies')}</Link>
          </li>
          <li>
            <a href="/#contact" className="hover:text-[#FACC15] transition-colors">{t('contact')}</a>
          </li>
        </ul>

        {/* Desktop Language Dropdown */}
        <div className="hidden md:flex relative ml-4 items-center">
          <button 
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider hover:text-[#FACC15] transition-colors focus:outline-none text-white"
          >
            <Globe size={18} />
            <span className="hidden lg:inline">{languages[language]}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangDropdownOpen && (
            <div className="absolute top-full right-0 mt-4 w-32 bg-[#0B1222]/95 backdrop-blur-xl border border-blue-500/10 rounded-lg shadow-xl shadow-blue-900/10 py-2 flex flex-col z-50 animate-in fade-in zoom-in duration-200">
              {(Object.keys(languages) as Array<keyof typeof languages>).map((langCode) => (
                <button
                  key={langCode}
                  onClick={() => {
                    setLanguage(langCode as 'en' | 'da' | 'ps');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors ${language === langCode ? 'text-[#FACC15] font-bold' : ''}`}
                >
                  {languages[langCode]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-[#FACC15] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#0B1222]/95 backdrop-blur-xl border border-blue-500/10 rounded-[10px] p-6 shadow-2xl shadow-blue-900/10 md:hidden animate-in fade-in zoom-in duration-300">
            <ul className="flex flex-col gap-6 text-center text-sm font-medium uppercase tracking-[0.2em]">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors border-b border-white/5"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/members" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors border-b border-white/5"
                >
                  {t('companies')}
                </Link>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-[#FACC15] transition-colors"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
            
            {/* Mobile Language Selection */}
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-wider font-medium">
                <Globe size={16} />
                <span>{t('select_language')}</span>
              </div>
              <div className="flex gap-4">
                {(Object.keys(languages) as Array<keyof typeof languages>).map((langCode) => (
                  <button
                    key={langCode}
                    onClick={() => {
                      setLanguage(langCode as 'en' | 'da' | 'ps');
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                      language === langCode 
                        ? 'bg-[#FACC15]/10 border-[#FACC15] text-[#FACC15]' 
                        : 'border-transparent text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {languages[langCode].substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
