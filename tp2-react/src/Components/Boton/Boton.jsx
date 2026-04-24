import React from "react";

/**
 * @param {string} texto - Texto del botón
 * @param {function} onClick - Función a ejecutar al hacer click
 * @param {string} variant - Variante: 'primary', 'secondary', 'danger', 'success', 'outline', 'ghost'
 * @param {string} size - Tamaño: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Desactiva el botón
 * @param {boolean} fullWidth - Ancho completo
 * @param {string} className - Clases Tailwind adicionales
 * @param {string} type - Tipo de botón: 'button', 'submit', 'reset'
 * @param {ReactNode} children - Contenido personalizado del botón
 */
export default function Boton({
  texto = "Click",
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  children,
  ...props
}) {
  // Estilos base con Tailwind
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variantes de color
  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-gray-400 disabled:hover:bg-gray-400",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-400 disabled:hover:bg-gray-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-gray-400 disabled:hover:bg-gray-400",
    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:bg-gray-400 disabled:hover:bg-gray-400",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:border-gray-400 disabled:text-gray-400",
    ghost:
      "text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:text-gray-400",
  };

  // Tamaños
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Combinar todas las clases
  const clasesCombinadas = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clasesCombinadas}
      {...props}
    >
      {children || texto}
    </button>
  );
}