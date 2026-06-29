import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function IniciarSesion() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  useEffect(() => {
    document.title = t("nav.login") || "Iniciar Sesión";
  }, [t, i18n.language]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError(null);

    try {
      // Petición POST al endpoint de login
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Credenciales inválidas.");
      }

      login(data.user, data.token);

      navigate("/");
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
            {t("signin.title") || "Iniciar Sesión"}
          </h2>

          {/* Mensaje de Error */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white/40 text-xs font-bold tracking-widest uppercase"
            >
              {t("signin.emailLabel") || "Correo Electrónico"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              placeholder={t("signin.emailPlaceholder") || "correo@ejemplo.com"}
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-white/40 text-xs font-bold tracking-widest uppercase"
            >
              {t("signin.passwordLabel") || "Contraseña"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="bg-[#050508] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all"
              placeholder={t("signin.passwordPlaceholder") || "********"}
            />
          </div>

          {/* Mensaje inferior */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/60">
              {t("signin.loginMessage") || "¿No tienes cuenta?"}
            </span>
            <Link
              to="/registrarse"
              className="text-[#00e5ff] hover:underline transition-all"
            >
              {t("signin.loginLink") || "Regístrate aquí"}
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
                <span>{t("signin.sendingBtn") || "Iniciando sesión..."}</span>
              </>
            ) : (
              <>
                <span>{t("signin.submitBtn") || "Iniciar sesión"}</span>
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
