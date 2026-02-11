import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      number: "50+",
      label: t('stats_factories_label'),
      description: t('stats_factories_desc'),
      marginTop: "md:mt-0"
    },
    {
      number: "15+",
      label: t('stats_provinces_label'),
      description: t('stats_provinces_desc'),
      marginTop: "md:mt-12" 
    },
    {
      number: "100%",
      label: t('stats_quality_label'),
      description: t('stats_quality_desc'),
      marginTop: "md:mt-24"
    }
  ];

  return (
    <section className="bg-brand-bg text-white min-h-screen flex items-center py-12 px-[5px] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-6 block">{t('about_header')}</span>
          <h2 className="text-[15px] sm:text-base md:text-lg lg:text-xl md:max-w-[500px] font-medium leading-relaxed max-w-4xl mx-auto text-gray-300">
            {t('about_desc')}
          </h2>
        </div>

        {/* Stats Grid with Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10 px-4 sm:px-10 md:px-[70px]">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col border-l border-gray-800 pl-5 md:pl-6 ${stat.marginTop} transition-all duration-500 hover:border-gray-600`}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-3 py-1">
                {stat.number}
              </h3>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
