import { Link } from 'react-router-dom'
import logo from '@/assets/logo-alegria.webp'

export function SiteFooter() {
  return (
    <footer className="bg-[#070708] text-white border-t border-white/10">
      <div className="container-edge py-16 md:py-20 grid gap-14 md:grid-cols-[1.5fr_1fr_1.2fr]">

        {/* Logo + descrição */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Alegria Expo Brutos"
              className="h-12 md:h-20 w-auto object-contain"
            />
          </div>

          <p className="mt-8 max-w-sm text-white/65 leading-relaxed">
            A maior feira de semijoias em bruto da América Latina, no coração da tradicional Rua
            da Alegria.
          </p>
        </div>

        {/* Navegação */}
        <FooterCol
          title="Navegação"
          links={[
            { to: '/', label: 'Home' },
            { to: '/expositores', label: 'Expositores' },
            { to: '/patrocinadores', label: 'Patrocinadores' },
            { to: '/rua-da-alegria', label: 'Rua da Alegria' },
          ]}
        />

        {/* Redes */}
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45 mb-5">
            Nossas Redes
          </div>

          <div className="flex flex-col items-start gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70 border-b border-white/30 pb-1 hover:text-[#FF00E7] hover:border-[#FF00E7] transition-colors"
            >
              Instagram
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70 border-b border-white/30 pb-1 hover:text-[#FF00E7] hover:border-[#FF00E7] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge py-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
          <span>© 2026 Alegria Expo Brutos · Todos os direitos reservados</span>
          <span>Rua da Alegria · Limeira · SP</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/45 mb-5">
        {title}
      </div>

      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/80 hover:text-[#FF00E7] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
