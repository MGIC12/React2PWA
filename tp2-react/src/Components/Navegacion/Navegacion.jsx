import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navegacion({direccion, label}) {
  return (
    <NavLink
                to={direccion}
                className={({ isActive }) =>
                    isActive
                    ? "relative text-base font-medium text-white tracking-[0.12em] uppercase after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:bg-[#00e5ff] after:-translate-x-1/2"
                    : "relative text-base font-medium text-white/80 no-underline tracking-[0.12em] uppercase transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:bg-[#00e5ff] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                }
                >
                {label}
    </NavLink>
  )
}
