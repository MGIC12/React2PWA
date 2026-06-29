import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Registrarse() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("nav.register") || "Registrarse";
  }, [t, i18n.language]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError(null);

    // Validación
    if (formData.password !== formData.confirmPassword) {
      setError(
        t("register.passwordMismatch") || "Las contraseñas no coinciden.",
      );
      setEnviando(false);
      return;
    }

    try {
      // Petición real al backend
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al registrarse.");
      }

      setExito(true);
      setTimeout(() => navigate("/iniciar-sesion"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#050508]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <Header />

      <div className="mx-auto mt-10 p-4 w-full max-w-md h-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg shadow-black/50 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            {t("register.title") || "Registrarse"}
          </h2>

          {/* Mensajes de Error y Éxito */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
          {exito && (
            <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-2 rounded-lg text-sm">
              {t("register.successMessage") ||
                "¡Registro exitoso! Redirigiendo..."}
            </div>
          )}

          {/* Nombre y Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-white/40 text-xs font-bold tracking-widest uppercase"
              >
                {t("register.nameLabel") || "Nombre"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                placeholder={t("register.namePlaceholder") || "Tu nombre"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-white/40 text-xs font-bold tracking-widest uppercase"
              >
                {t("register.emailLabel") || "Correo Electrónico"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
                placeholder={
                  t("register.emailPlaceholder") || "correo@ejemplo.com"
                }
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-white/40 text-xs font-bold tracking-widest uppercase"
            >
              {t("register.passwordLabel") || "Contraseña"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              placeholder={t("register.passwordPlaceholder") || "********"}
            />
          </div>

          {/* Confirmar Contraseña */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-white/40 text-xs font-bold tracking-widest uppercase"
            >
              {t("register.confirmPasswordLabel") || "Confirmar Contraseña"}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              placeholder={
                t("register.confirmPasswordPlaceholder") || "********"
              }
            />
          </div>

          {/* Mensaje inferior */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/60">
              {t("register.loginMessage") || "¿Ya tienes cuenta?"}
            </span>
            <Link
              to="/iniciar-sesion"
              className="text-[#00e5ff] hover:underline transition-all"
            >
              {t("register.loginLink") || "Inicia sesión"}
            </Link>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={enviando}
            className="mt-2 bg-transparent border-2 border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>{t("register.sendingBtn") || "Registrando..."}</span>
              </>
            ) : (
              <>
                <span>{t("register.submitBtn") || "Registrarse"}</span>
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
      <Footer />
    </div>
  );
}
