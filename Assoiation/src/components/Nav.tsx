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
    <nav className="fixed top-0 left-0 right-0 z-70">
      <div className="bg-[#0B1222]/2 backdrop-blur-md text-white py-4 md:py-5 flex items-center justify-between px-4 md:px-[60px] border-b border-white/5 relative">
        {/* Left: Association Name */}
        <Link to="/" className="text-lg md:text-2xl font-bold tracking-tight flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/10">
            <img 
              className="w-full h-full object-cover" 
              src="/images/logo.jpeg" 
              alt="Logo"
              style={{ maskImage: 'radial-gradient(circle, black 68%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 68%, transparent 70%)' }}
            />
          </div>
          <span className="font-serif tracking-widest text-shadow-sm">ASSOCIATION</span>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
          <li>
            <Link to="/" className="hover:text-red-500 transition-colors duration-300">{t('home')}</Link>
          </li>
          <li>
            <a href="#about" className="hover:text-red-500 transition-colors duration-300">{t('about_us')}</a>
          </li>
          <li>
            <Link to="/members" className="hover:text-red-500 transition-colors duration-300">{t('companies')}</Link>
          </li>
          <li>
            <a href="/#contact" className="hover:text-red-500 transition-colors duration-300">{t('contact')}</a>
          </li>
        </ul>

        {/* Desktop Language Dropdown */}
        <div className="hidden md:flex relative ml-4 items-center">
          <button 
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors focus:outline-none text-white"
          >
            <Globe size={18} />
            <span className="hidden lg:inline">{languages[language]}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangDropdownOpen && (
            <div className="absolute top-full right-0 mt-4 w-32 bg-black/90 backdrop-blur-xl border border-white/10 rounded-none shadow-xl py-2 flex flex-col z-50">
              {(Object.keys(languages) as Array<keyof typeof languages>).map((langCode) => (
                <button
                  key={langCode}
                  onClick={() => {
                    setLanguage(langCode as 'en' | 'da' | 'ps');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors ${language === langCode ? 'text-red-500 font-bold' : ''}`}
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
          className="md:hidden p-2 text-white hover:text-red-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="flex flex-col gap-6 text-center text-sm font-bold uppercase tracking-[0.2em]">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-red-500 transition-colors border-b border-white/5"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/members" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-red-500 transition-colors border-b border-white/5"
                >
                  {t('companies')}
                </Link>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
            
            {/* Mobile Language Selection */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-wider font-bold">
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
                    className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border transition-all ${
                      language === langCode 
                        ? 'bg-red-500/10 border-red-500 text-red-500' 
                        : 'border-white/10 text-gray-400 hover:text-white'
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
