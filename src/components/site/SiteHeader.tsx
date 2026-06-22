import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '@/assets/logo-alegria.webp'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/expositores', label: 'Expositores' },
  { to: '/patrocinadores', label: 'Patrocinadores' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-edge flex items-center justify-between py-5 md:py-6">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Alegria Expo Brutos"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Alegria Expo Brutos"
            className="h-12 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.28em] transition-colors ${
                  isActive ? 'text-[#fb00e4]' : 'text-white/75 hover:text-[#fb00e4]'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          <Link
            to="/rua-da-alegria"
            className="btn-elegant !py-2.5 !px-5 !text-sm !bg-[#FF00E7] !text-[#ffffff] hover:!bg-[#0100F4] hover:!text-[#ffffff]"
          >
            Rua da Alegria
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="lg:hidden border border-white/40 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden bg-[#070708]/95 backdrop-blur-md border-t border-white/10 border-b border-white/10">
          <nav className="container-edge flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-display italic text-2xl text-[#f3e9d6] hover:text-[#FF00E7] transition-colors"
              >
                {n.label}
              </Link>
            ))}

            <Link
              to="/rua-da-alegria"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#FF00E7] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#0100F4] hover:text-white"
            >
              Rua da Alegria
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
