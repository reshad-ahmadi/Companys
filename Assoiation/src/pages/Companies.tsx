import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Navigation from '../components/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Companies() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/companies`);
        const data = await response.json();
        // Combining static ones for now or just using dynamic ones
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-[70px]">
        {/* Header */}
        <div 
          ref={headerAnimation.ref}
          className={`max-w-7xl mx-auto mb-16 text-center transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-4 block">{t('our_members')}</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('leading')} <span className="text-brand-primary">{t('companies_highlight')}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('companies_desc')}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder={t('search_placeholder')} 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-brand-primary text-black font-bold text-sm">{t('all')}</button>
            <Link to="/admin" className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:border-brand-primary transition-all flex items-center gap-2">
              <span className="text-brand-primary font-bold">+</span> {t('add_company')}
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div 
          ref={gridAnimation.ref}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-150 ${
            gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {loading ? (
             <div className="col-span-full py-20 text-center text-gray-500 uppercase tracking-widest text-sm animate-pulse">
                {t('loading_units')}
             </div>
          ) : companies.length > 0 ? (
            companies.map((company) => (
              <div 
                key={company.id}
                className="group bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-brand-primary/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="h-48 mb-6 flex items-center justify-center bg-white/5 rounded-2xl p-6 group-hover:bg-white/10 transition-colors">
                  <img 
                    src={company.image || "/images/logo.jpeg"} 
                    alt={company.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">{company.category}</span>
                      <h3 className="text-2xl font-bold mt-1 group-hover:text-brand-primary transition-colors">{company.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {company.description}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-xs mb-8">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {company.location}
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl border border-white/10 font-bold text-sm tracking-wider uppercase group-hover:bg-brand-primary group-hover:text-black group-hover:border-brand-primary transition-all mt-auto">
                  {t('view_profile')}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-gray-500 mb-6">{t('no_companies_found')}</p>
              <Link to="/admin" className="px-8 py-3 bg-brand-primary text-black font-bold rounded-xl hover:bg-brand-secondary transition-all">
                {t('add_first_company')}
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
