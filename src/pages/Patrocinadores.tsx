import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const patrocinadores = [
  { name: 'Patrocinador Diamante 01', category: 'Diamante', booth: '01', slug: 'patrocinador-diamante-01' },
  { name: 'Patrocinador Diamante 02', category: 'Diamante', booth: '02', slug: 'patrocinador-diamante-02' },
  { name: 'Patrocinador Ouro 01', category: 'Ouro', booth: '03', slug: 'patrocinador-ouro-01' },
  { name: 'Patrocinador Ouro 02', category: 'Ouro', booth: '04', slug: 'patrocinador-ouro-02' },
  { name: 'Patrocinador Ouro 03', category: 'Ouro', booth: '05', slug: 'patrocinador-ouro-03' },
  { name: 'Patrocinador Prata 01', category: 'Prata', booth: '06', slug: 'patrocinador-prata-01' },
  { name: 'Patrocinador Prata 02', category: 'Prata', booth: '07', slug: 'patrocinador-prata-02' },
  { name: 'Patrocinador Prata 03', category: 'Prata', booth: '08', slug: 'patrocinador-prata-03' },
  { name: 'Patrocinador Prata 04', category: 'Prata', booth: '09', slug: 'patrocinador-prata-04' },
  { name: 'Apoio 01', category: 'Apoio', booth: '10', slug: 'apoio-01' },
  { name: 'Apoio 02', category: 'Apoio', booth: '11', slug: 'apoio-02' },
  { name: 'Apoio 03', category: 'Apoio', booth: '12', slug: 'apoio-03' },
]

export default function Patrocinadores() {
  usePageMeta({
    title: 'Patrocinadores — Alegria Expo Brutos 2026',
    description: 'Conheça as marcas que patrocinam a 7ª edição da Alegria Expo Brutos.',
    ogTitle: 'Patrocinadores · Alegria Expo Brutos',
    ogDescription:
      'As marcas que tornam possível a maior feira de semijoias em bruto da América Latina.',
  })

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Apoio à 7ª edição</div>

            <h1 className="mt-8 font-display text-[13vw] md:text-[9rem] leading-[0.92] text-[#f3e9d6]">
              Nossos
              <br />
              <span className="display-italic text-[#fb00e4]">patrocinadores.</span>
            </h1>
          </div>

          <p className="text-lg text-white/75 leading-relaxed max-w-md">
            Marcas que acreditam no poder do encontro presencial e ajudam a Rua da Alegria a
            continuar sendo o principal polo de semijoias do país.
          </p>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl md:text-6xl text-[#f3e9d6]">
              <span className="display-italic">{patrocinadores.length}</span> parceiros confirmados
            </h2>

            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
              Atualizado para a 7ª edição
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {patrocinadores.map((p) => (
              <Link
                key={p.booth}
                to={`/patrocinadores/${p.slug}`}
                className="group relative block bg-[#070708] hover:bg-[#0e0e16] transition-colors min-h-[240px] p-6 md:p-8"
              >
                <div className="flex flex-col h-full justify-between">

                  {/* Topo: frame + nome */}
                  <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 items-center">

                    {/* Frame 1:1 */}
                    <div className="aspect-square w-full border border-white/15 bg-white/5 flex items-center justify-center overflow-hidden">
                      <span className="font-display text-4xl text-[#fb00e4]">
                        {p.name.charAt(0)}
                      </span>
                    </div>

                    {/* Nome alinhado ao frame */}
                    <h3 className="font-display text-3xl md:text-4xl text-[#f3e9d6] leading-tight">
                      {p.name}
                    </h3>
                  </div>

                  {/* Parte inferior centralizada */}
                  <div className="mt-8 text-center">
                    <div className="text-sm text-white/65">
                      {p.category}
                    </div>

                    <div className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.28em] text-white/70 border-b border-white/30 pb-1 group-hover:text-[#fb00e4] group-hover:border-[#fb00e4] transition-colors">
                      Ver perfil →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="panel-magenta text-white">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-5xl md:text-7xl leading-[1]">
            Quer patrocinar a <span className="display-italic">próxima edição?</span>
          </h2>

          <div className="md:justify-self-end">
            <Link
              to="/"
              className="btn-elegant mt-10 !bg-[#ffffff] !text-[#000000] hover:!bg-[#0100F4] hover:!text-[#ffffff]"
            >
              Falar com a organização →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
