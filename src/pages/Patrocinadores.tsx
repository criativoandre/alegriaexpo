import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const patrocinadores = [
  { name: 'Patrocinador Diamante 01', category: 'Diamante', booth: '01', slug: 'patrocinador-diamante-01', logo: '/patrocinadores/1.jpg' },
  { name: 'Patrocinador Diamante 02', category: 'Diamante', booth: '02', slug: 'patrocinador-diamante-02', logo: '/patrocinadores/patrocinador-diamante-02.png' },
  { name: 'Patrocinador Ouro 01', category: 'Ouro', booth: '03', slug: 'patrocinador-ouro-01', logo: '/patrocinadores/patrocinador-ouro-01.png' },
  { name: 'Patrocinador Ouro 02', category: 'Ouro', booth: '04', slug: 'patrocinador-ouro-02', logo: '/patrocinadores/patrocinador-ouro-02.png' },
  { name: 'Patrocinador Ouro 03', category: 'Ouro', booth: '05', slug: 'patrocinador-ouro-03', logo: '/patrocinadores/patrocinador-ouro-03.png' },
  { name: 'Patrocinador Prata 01', category: 'Prata', booth: '06', slug: 'patrocinador-prata-01', logo: '/patrocinadores/patrocinador-prata-01.png' },
  { name: 'Patrocinador Prata 02', category: 'Prata', booth: '07', slug: 'patrocinador-prata-02', logo: '/patrocinadores/patrocinador-prata-02.png' },
  { name: 'Patrocinador Prata 03', category: 'Prata', booth: '08', slug: 'patrocinador-prata-03', logo: '/patrocinadores/patrocinador-prata-03.png' },
  { name: 'Patrocinador Prata 04', category: 'Prata', booth: '09', slug: 'patrocinador-prata-04', logo: '/patrocinadores/patrocinador-prata-04.png' },
  { name: 'Apoio 01', category: 'Apoio', booth: '10', slug: 'apoio-01', logo: '/patrocinadores/apoio-01.png' },
  { name: 'Apoio 02', category: 'Apoio', booth: '11', slug: 'apoio-02', logo: '/patrocinadores/apoio-02.png' },
  { name: 'Apoio 03', category: 'Apoio', booth: '12', slug: 'apoio-03', logo: '/patrocinadores/apoio-03.png' },
  { name: 'Patrocinador Diamante 03', category: 'Diamante', booth: '13', slug: 'patrocinador-diamante-03', logo: '/patrocinadores/patrocinador-diamante-03.png' },
  { name: 'Patrocinador Ouro 04', category: 'Ouro', booth: '14', slug: 'patrocinador-ouro-04', logo: '/patrocinadores/patrocinador-ouro-04.png' },
  { name: 'Patrocinador Ouro 05', category: 'Ouro', booth: '15', slug: 'patrocinador-ouro-05', logo: '/patrocinadores/patrocinador-ouro-05.png' },
  { name: 'Patrocinador Prata 05', category: 'Prata', booth: '16', slug: 'patrocinador-prata-05', logo: '/patrocinadores/patrocinador-prata-05.png' },
  { name: 'Patrocinador Prata 06', category: 'Prata', booth: '17', slug: 'patrocinador-prata-06', logo: '/patrocinadores/patrocinador-prata-06.png' },
  { name: 'Patrocinador Prata 07', category: 'Prata', booth: '18', slug: 'patrocinador-prata-07', logo: '/patrocinadores/patrocinador-prata-07.png' },
  { name: 'Patrocinador Bronze 01', category: 'Bronze', booth: '19', slug: 'patrocinador-bronze-01', logo: '/patrocinadores/patrocinador-bronze-01.png' },
  { name: 'Patrocinador Bronze 02', category: 'Bronze', booth: '20', slug: 'patrocinador-bronze-02', logo: '/patrocinadores/patrocinador-bronze-02.png' },
  { name: 'Patrocinador Bronze 03', category: 'Bronze', booth: '21', slug: 'patrocinador-bronze-03', logo: '/patrocinadores/patrocinador-bronze-03.png' },
  { name: 'Apoio 04', category: 'Apoio', booth: '22', slug: 'apoio-04', logo: '/patrocinadores/apoio-04.png' },
  { name: 'Apoio 05', category: 'Apoio', booth: '23', slug: 'apoio-05', logo: '/patrocinadores/apoio-05.png' },
  { name: 'Apoio 06', category: 'Apoio', booth: '24', slug: 'apoio-06', logo: '/patrocinadores/apoio-06.png' },
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
                      {patrocinadores.map((e) => (
                        <Link
                          key={e.booth}
                          to={`/patrocinadores/${e.slug}`}
                          className="group relative block bg-[#070708] hover:bg-[#0e0e16] transition-colors min-h-[240px] p-6 md:p-8"
                        >
                          <div className="flex flex-col h-full justify-between">
          
                            {/* Topo: frame + nome */}
                            <div className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] gap-6 items-center">
          
                              {/* Frame 1:1 */}
                              <div className="aspect-square w-full border border-white/15 bg-white/5 flex items-center justify-center overflow-hidden">
                                <img
                                  src={e.logo}
                                  alt={`Logo ${e.name}`}
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>
          
                              {/* Nome da empresa alinhado ao frame */}
                              <h3 className="font-display text-3xl md:text-4xl text-[#f3e9d6] leading-tight">
                                {e.name}
                              </h3>
                            </div>
          
                            {/* Parte inferior centralizada */}
                            <div className="mt-8 text-center">
                              <div className="text-sm text-white/65">
                                {e.category}
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
