import React from 'react';

import { useLanguage } from '../context/LanguageContext';



const HeroSection = () => {

  const { t } = useLanguage();



  return (

    <section className="relative bg-[#0B1222] text-white overflow-hidden flex flex-col justify-center items-center min-h-screen">
      {/* Background Image with High-Intensity Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,138,0.2),transparent_50%)]"></div>

        {/* Image overlay (will show when image is added) */}
        <img
          src="/images/3333.png"
          alt="Industrial Steel and Iron Pipe Manufacturing"
          className="w-full h-full object-cover opacity-90 object-center scale-100"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />

      
        {/* <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222] via-[#0B1222]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-transparent to-[#0B1222]/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_90%,rgba(37,99,235,0.15),transparent_0%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-2 sm:px-6 min-[320px]:pt-[40px] lg:px-8 text-center transition-all duration-300">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md
         mb-6 sm:mb-8 hover:border-blue-400/50 transition-colors cursor-pointer transform hover:scale-105 duration-300">
          <span className="text-blue-400 text-[10px] sm:text-xs">✦</span>
          <span className="text-blue-100 text-[10px] sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap tracking-widest">{t('powered_by')}</span>
          <span className="text-blue-400 text-[10px] sm:text-xs">✦</span>
        </div>



        {/* Main Headline */}

        <h1 className="text-3xl sm:text-5xl md:text-[30px] lg:text-[36px] 2xl:text-[65px] font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">

          <span className="block mb-2">{t('hero_title_1')}</span>

          <span className="uppercase font-black sm:text-4xl md:text-[24px] lg:text-[30px] 2xl:text-[65px] text-gray-200">

            {t('hero_title_2')}

          </span>

        </h1>



        {/* Subheadline description */}

        <p className="mt-8 sm:mt-10 max-w-2xl 2xl:max-w-5xl mx-auto text-sm sm:text-lg md:text-[16px]

         md:max-w-[700px] lg:text-[16px] 2xl:text-[28px] text-blue-100/80 mb-8 sm:mb-12 leading-relaxed font-medium">

          "{t('hero_desc')}"

        </p>



        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">

          <button className="w-full sm:w-auto min-w-[160px] px-5 py-4 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white

          text-sm sm:text-base font-bold rounded-lg whitespace-nowrap">

            {t('join_now')}

          </button>

        </div>
                  

                  

      </div>

    </section>

  );

};



export default HeroSection;