import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map language codes to display names
  const languages: { [key: string]: string } = {
    en: 'English',
    da: 'Dari',
    ps: 'Pashto'
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div 
        className={`bg-white text-gray-800 py-3 px-6 md:px-8 flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        {/* Left: Association Name/Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
             {/* Using a placeholder icon/text until logo is confirmed for light bg */}
            <img 
              className="w-full h-full object-cover" 
              src="/images/logo.jpeg" 
              alt="Logo"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-blue-900 tracking-tighter text-lg">UAMC</span>
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em]">AFGHANISTAN</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors duration-300">{t('home')}</Link>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-300">{t('about_us')}</a>
          </li>
          <li>
            <Link to="/members" className="hover:text-blue-600 transition-colors duration-300">{t('companies')}</Link>
          </li>
          <li>
             {/* Language Dropdown for Desktop */}
            <div className="relative">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors focus:outline-none"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-32 bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col z-50 overflow-hidden">
                  {(Object.keys(languages) as Array<keyof typeof languages>).map((langCode) => (
                    <button
                      key={langCode}
                      onClick={() => {
                        setLanguage(langCode as 'en' | 'da' | 'ps');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${language === langCode ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                    >
                      {languages[langCode]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>

         {/* Right: Contact Button */}
        <div className="hidden md:block">
           <a 
            href="/#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
           >
             {t('contact')}
           </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl p-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-300 border border-gray-100 mx-4">
            <ul className="flex flex-col gap-4 text-center text-sm font-bold text-gray-800">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 hover:text-blue-600 transition-colors border-b border-gray-100"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 hover:text-blue-600 transition-colors border-b border-gray-100"
                >
                  {t('about_us')}
                </a>
              </li>
              <li>
                <Link 
                  to="/members" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 hover:text-blue-600 transition-colors border-b border-gray-100"
                >
                  {t('companies')}
                </Link>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-blue-600"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
            
            {/* Mobile Language Selection */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center gap-4">
              {(Object.keys(languages) as Array<keyof typeof languages>).map((langCode) => (
                <button
                  key={langCode}
                  onClick={() => {
                    setLanguage(langCode as 'en' | 'da' | 'ps');
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    language === langCode 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {langCode}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
