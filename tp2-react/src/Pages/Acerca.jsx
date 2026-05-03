import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useTranslation } from 'react-i18next';

export default function Acerca() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.title = t('about.title');
  }, [t, i18n.language]);
  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <Header />

      <main className="grow container mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wider">
            {t('about.mainTitle')}{" "}
            <span className="text-[#00e5ff]">{t('about.mainTitleHighlight')}</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            {t('about.mainDesc')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          {/* Contenedor de la imagen estática (Sin hover) */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop"
                alt="Interior de una PC Gamer de alto rendimiento iluminada"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-widest border-l-4 border-[#00e5ff] pl-4">
              {t('about.missionTitle')}
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              {t('about.missionP1')}
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              {t('about.missionP2')}
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-4xl font-black text-[#00e5ff] mb-1">
                  {t('about.stats1Title')}
                </h4>
                <p className="text-white/50 text-xs tracking-widest uppercase font-bold">
                  {t('about.stats1Desc')}
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#00e5ff] mb-1">{t('about.stats2Title')}</h4>
                <p className="text-white/50 text-xs tracking-widest uppercase font-bold">
                  {t('about.stats2Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold text-white mb-12">
            {t('about.pillarsTitle')} <span className="text-[#00e5ff]">{t('about.pillarsTitleHighlight')}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#00e5ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {t('about.pillar1Title')}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {t('about.pillar1Desc')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#00e5ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {t('about.pillar2Title')}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {t('about.pillar2Desc')}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#00e5ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {t('about.pillar3Title')}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {t('about.pillar3Desc')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
