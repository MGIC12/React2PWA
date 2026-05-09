import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useTranslation } from 'react-i18next';

export default function Contacto() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    document.title = t('nav.contact');
  }, [t, i18n.language]);
  // Estados para manejar el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador del envío del formulario (Simulado)
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Se simula el envío del formulario
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });

      // Ocultamos el mensaje de éxito después de 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <Header />

      <main className="grow container mx-auto px-6 md:px-10 py-12 lg:py-20 max-w-full">
        <div className="text-center max-w-full sm:max-w-3xl mx-auto mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-wider break-words whitespace-normal leading-tight">
            {t('contact.title')} <span className="text-[#00e5ff]">{t('contact.titleHighlight')}</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-3/5 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Mensaje de exito */}
            {enviado && (
              <div className="absolute inset-0 bg-[#050508]/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center px-6 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-[#00e5ff]/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-[#00e5ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-widest">
                  {t('contact.successTitle')}
                </h3>
                <p className="text-white/60 text-center px-6">
                  {t('contact.successMsg')}
                </p>
              </div>
            )}

            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#00e5ff] pl-4">
              {t('contact.formTitle')}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nombre"
                    className="text-white/40 text-xs font-bold tracking-widest uppercase"
                  >
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-white/40 text-xs font-bold tracking-widest uppercase"
                  >
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="asunto"
                  className="text-white/40 text-xs font-bold tracking-widest uppercase"
                >
                  {t('contact.subjectLabel')}
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  required
                  value={formData.asunto}
                  onChange={handleChange}
                  className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all appearance-none"
                >
                  <option value="" disabled>
                    {t('contact.subjectPlaceholder')}
                  </option>
                  <option value="sugerencia">{t('contact.subjectSuggest')}</option>
                  <option value="correccion">{t('contact.subjectCorrect')}</option>
                  <option value="bug">{t('contact.subjectBug')}</option>
                  <option value="otro">{t('contact.subjectOther')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensaje"
                  className="text-white/40 text-xs font-bold tracking-widest uppercase"
                >
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={enviando}
                className="mt-4 bg-transparent border-2 border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    {t('contact.sendingBtn')}
                  </>
                ) : (
                  <>
                    <span>{t('contact.submitBtn')}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-10 justify-center">
            {/* Info Directa */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                {t('contact.communicationNodes')}
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00e5ff]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {t('contact.directTransmission')}
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      {t('contact.email')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00e5ff]">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 127.14 96.36"
                    >
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91.08,65.69,84.69,65.69Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {t('contact.discordCommunity')}
                    </h4>
                    <p className="text-white/60 text-sm mt-1">
                      {t('contact.discordDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#00e5ff]/5 border border-[#00e5ff]/20 rounded-xl p-6">
              <h4 className="text-[#00e5ff] font-bold text-sm mb-3 tracking-widest uppercase flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('contact.importantNotice')}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('contact.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
