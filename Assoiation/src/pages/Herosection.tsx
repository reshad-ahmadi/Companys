import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, ArrowRight, Building2, Globe, TrendingUp, Users, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const { t } = useLanguage();
  const badgeAnimation = useScrollAnimation();
  const headingAnimation = useScrollAnimation();
  const descAnimation = useScrollAnimation();
  const buttonAnimation = useScrollAnimation();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="High-level boardroom meeting"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3YdVJct9ZcDK7dGUqiHTVmW2rYihKtCGmLfH_zoTy0CMd6Gpa4t-59QCKpyA9u5hvqm_SyO32qp6a07wc0FIPSkXdHTV2AHrnMgaHo2aYwyA1KM_nTsiT_ClzR1rnQwcaqRF0f6o-onJ92WJrB-3Y4iE0JymTHYe84KTyWos1uyHkRDt5ti5o5NlSA7tBRNfr3fJtCuYcsbxCgqd6qMm9WT5Lslw232pkF1AUlkkbGfzelIptH4uod9Uv1JEBw5tSNzvuI376xuhz"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center py-12 md:py-20 mt-[90px] md:mt-[70px] ">
        {/* Badge */}
        <div 
          ref={badgeAnimation.ref}
          className={`inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 2xl:px-6 2xl:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 md:mb-8 2xl:mb-10 shadow-2xl max-w-full transition-all duration-1000 ${
            badgeAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 2xl:w-5 2xl:h-5 text-blue-600 shrink-0" />
          <span className="text-[9px] sm:text-[10px] md:text-[11px] 2xl:text-sm font-bold tracking-[0.15em] md:tracking-[0.4em] uppercase text-white whitespace-nowrap overflow-hidden text-ellipsis">The Official Voice of Afghan Manufacturing</span>
        </div>

        {/* Heading */}
        <h1 
          ref={headingAnimation.ref}
          className={`text-base sm:text-xl sm:max-w-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white
             max-w-6xl 2xl:max-w-7xl mx-auto leading-[1.3] md:leading-[1.2]
             mb-6 2xl:mb-8 tracking-tight drop-shadow-sm px-2 transition-all duration-1000 delay-150 ${
            headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Union of Afghan Manufacturing Companies of
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200 drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            CANS, PROFILES, IRON AND PIPES
          </span>
        </h1>

        {/* Description */}
        <p 
          ref={descAnimation.ref}
          className={`max-w-xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-6xl mx-auto text-xs sm:text-[14px] lg:text-[15px] 2xl:text-[20px] text-center xl:text-center xl:text-[17px] text-slate-200 font-light leading-relaxed mb-8 md:mb-10 2xl:mb-12 px-4 md:px-5 lg:px-[20px] font-semibold transition-all duration-1000 delay-300 ${
            descAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          The Union of Afghan Manufacturing Companies of Cans, Profiles, Iron and Galvanized Pipes was established in 2024 (1403 in the Afghan calendar) with the primary
           objective of fostering internal coordination among related manufacturing industries and strengthening cooperation
            with governmental and non-governmental institutions. With a strategic focus on enhancing both the quality and quantity
             of domestic production,  of the Islamic 
             Emirate of Afghanistan on 30 October 2025 (8/8/1404) and commenced its practical activities thereafter.
        </p>

        {/* Buttons */}
        <div 
          ref={buttonAnimation.ref}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 transition-all duration-1000 delay-500 ${
            buttonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="/#contact" 
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3 2xl:px-10 2xl:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm md:text-base 2xl:text-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
          >
            CONTACT US
            <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>


      </main>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1222] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;