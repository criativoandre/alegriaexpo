import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { patrocinadores } from '@/data/patrocinadores'

export default function PaginaPatrocinador() {
  const { slug } = useParams<{ slug: string }>()
  const patrocinador = patrocinadores.find((p) => p.slug === slug)

  usePageMeta({
    title: patrocinador
      ? `${patrocinador.name} — Alegria Expo Brutos 2026`
      : 'Patrocinador não encontrado',
    description: patrocinador
      ? `Conheça a ${patrocinador.name}, patrocinadora da 7ª edição da Alegria Expo Brutos.`
      : '',
  })

  if (!patrocinador) {
    return (
      <section className="bg-[#070708] text-white min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-display text-5xl text-[#f3e9d6]">Patrocinador não encontrado.</p>
        <Link to="/patrocinadores" className="btn-elegant">← Voltar aos patrocinadores</Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Parceiro · {patrocinador.category}</div>
            <h1 className="mt-8 font-display text-[12vw] md:text-[8rem] leading-[0.92] text-[#f3e9d6]">
              {patrocinador.name}
            </h1>
          </div>

          <div className="border border-white/15 bg-white/5 aspect-square w-full max-w-[280px] flex items-center justify-center overflow-hidden">
            <img
              src={patrocinador.logo}
              alt={`Logo ${patrocinador.name}`}
              className="w-full h-full object-contain p-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <Link
            to="/patrocinadores"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55 hover:text-white transition-colors"
          >
            ← Voltar aos patrocinadores
          </Link>
        </div>
      </section>
    </>
  )
}