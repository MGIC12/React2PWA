import React from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function IniciarSesion() {
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

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
    className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Syne', sans-serif" }}>
      <Header/>
            
        <div className="mx-auto mt-10 p-4 w-full max-w-md h-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg shadow-black/50 max-w-2xl mx-auto">
  <h2 className="text-2xl font-bold text-white mb-2">{t('signin.title') || 'Iniciar Sesión'}</h2>
  
  
    <div className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-white/40 text-xs font-bold tracking-widest uppercase"
      >
        {t('signin.emailLabel')}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
        placeholder={t('signin.emailPlaceholder')}
      />
    </div>

  {/* Fila 2: Contraseña */}
  <div className="flex flex-col gap-2">
    <label
      htmlFor="password"
      className="text-white/40 text-xs font-bold tracking-widest uppercase"
    >
      {t('signin.passwordLabel')}
    </label>
    <input
      type="password"
      id="password"
      name="password"
      required
      value={formData.password}
      onChange={handleChange}
      className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
      placeholder={t('signin.passwordPlaceholder')}
    />
  </div>

  
  {/* Mensaje de Login integrado con flexbox y un diseño más limpio */}
  <div className="flex flex-wrap items-center gap-2 text-sm">
    <span className="text-white/60">{t('signin.loginMessage')}</span>
    <Link to="/registrarse" className="text-[#00e5ff] hover:underline transition-all">
      {t('signin.loginLink')}
    </Link>
  </div>

  {/* Botón con animación de carga integrada */}
  <button
    type="submit"
    disabled={enviando}
    className="mt-2 bg-transparent border-2 border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {enviando ? (
      <>
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        <span>{t('signin.sendingBtn') || 'Iniciando sesión...'}</span>
      </>
    ) : (
      <>
        <span>{t('signin.submitBtn') || 'Iniciar sesión'}</span>
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
        <Footer/>
    </div>
  )
}
