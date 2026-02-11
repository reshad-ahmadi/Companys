import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Shield, Cpu, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      number: "50+",
      label: t('stats_factories_label'),
      description: t('stats_factories_desc'),
    },
    {
      number: "15+",
      label: t('stats_provinces_label'),
      description: t('stats_provinces_desc'),
    },
    {
      number: "100%",
      label: t('stats_quality_label'),
      description: t('stats_quality_desc'),
    }
  ];

  const values = [
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: t('value_integrity'),
      desc: t('value_integrity_desc')
    },
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: t('value_innovation'),
      desc: t('value_innovation_desc')
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: t('value_collaboration'),
      desc: t('value_collaboration_desc')
    }
  ];

  return (
    <section className="bg-[#0B1222] text-white py-24 relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-blue-500 text-sm font-bold tracking-[0.3em] uppercase mb-4 block">{t('about_header')}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
            Building Afghanistan's <span className="text-blue-600">Industrial Future</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('about_desc')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-5xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.number}
              </h3>
              <h4 className="text-xl font-bold mb-3">{stat.label}</h4>
              <p className="text-gray-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about_mission_title')}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('about_mission_desc')}
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/10 to-transparent border border-white/10">
            <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about_vision_title')}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('about_vision_desc')}
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-16">{t('core_values')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/5 rounded-full border border-white/5 group-hover:border-blue-500 transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-gray-400 max-w-xs mx-auto">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
