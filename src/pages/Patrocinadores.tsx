import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const patrocinadores = [
  { name: '4D Folheados', category: 'Folheados', booth: '01', slug: '4d-folheados', logo: '/patrocinadores/4d-folheados.webp' },
  { name: 'Acesso Galvânica', category: 'Galvânica', booth: '02', slug: 'acesso-galvanica', logo: '/patrocinadores/acesso-galvanica.webp' },
  { name: 'ACP Galvânica', category: 'Galvânica', booth: '03', slug: 'acp-galvanica', logo: '/patrocinadores/acp-galvanica.webp' },
  { name: 'Bosco Galvânica', category: 'Galvânica', booth: '04', slug: 'bosco-galvanica', logo: '/patrocinadores/bosco-galvanica.webp' },
  { name: 'FC Joias Galvânica', category: 'Joias', booth: '05', slug: 'fc-joias', logo: '/patrocinadores/fc-joias-galvanica.webp' },
  { name: 'Franco Galvânica', category: 'Galvânica', booth: '06', slug: 'franco-galvanica', logo: '/patrocinadores/franco-galvanica.webp' },
  { name: 'GPS Galvânica', category: 'Galvânica', booth: '07', slug: 'gps-galvanica', logo: '/patrocinadores/gps-galvanica.webp' },
  { name: 'JMD Galvânica', category: 'Galvânica', booth: '08', slug: 'jmd-galvanica', logo: '/patrocinadores/jmd-galvanica.webp' },
  { name: 'La Mare Folheados', category: 'Folheados', booth: '09', slug: 'la-mare-folheados', logo: '/patrocinadores/la-mare-folheados.webp' },
  { name: 'Langge Galvanoplastia', category: 'Galvanoplastia', booth: '10', slug: 'langge-galvanoplastia', logo: '/patrocinadores/langge-galvanoplastia.webp' },
  { name: 'Magri Folheados', category: 'Folheados', booth: '11', slug: 'magri-folheados', logo: '/patrocinadores/magri-folheados.webp' },
  { name: 'Megiatto Galvânica', category: 'Galvânica', booth: '12', slug: 'megiatto-galvanica', logo: '/patrocinadores/megiatto-galvanica.webp' },
  { name: 'Metal Sul Galvânica', category: 'Galvânica', booth: '13', slug: 'metal-sul-galvanica', logo: '/patrocinadores/metal-sul-galvanica.webp' },
  { name: 'NG Galvânica', category: 'Galvânica', booth: '14', slug: 'ng-galvanica', logo: '/patrocinadores/ng-galvanica.webp' },
  { name: 'Omikron Galvânica', category: 'Galvânica', booth: '15', slug: 'omikron-galvanica', logo: '/patrocinadores/omikron-galvanica.webp' },
  { name: 'Pabeli Galvânica', category: 'Galvânica', booth: '16', slug: 'pabeli-galvanica', logo: '/patrocinadores/pabeli-galvanica.webp' },
  { name: 'Reluz Galvânica', category: 'Galvânica', booth: '17', slug: 'reluz-galvanica', logo: '/patrocinadores/reluz-galvanica.webp' },
  { name: 'RV Galvânica', category: 'Galvânica', booth: '18', slug: 'rv-galvanica', logo: '/patrocinadores/rv-galvanica.webp' },
  { name: 'Seven Galvânica', category: 'Galvânica', booth: '19', slug: 'seven-galvanica', logo: '/patrocinadores/seven-galvanica.webp' },
  { name: 'Sul Folheados', category: 'Folheados', booth: '20', slug: 'sul-folheados', logo: '/patrocinadores/sul-folheados.webp' },
  { name: 'Viena Galvânica', category: 'Apoio', booth: '21', slug: 'viena-galvanica', logo: '/patrocinadores/viena-galvanica.webp' },
  { name: 'Vitalicia Galvânica', category: 'Apoio', booth: '22', slug: 'vitalicia-galvanica', logo: '/patrocinadores/vitalicia-galvanica.webp' },
  { name: 'Zetti Galvânica', category: 'Apoio', booth: '23', slug: 'zetti-galvanica', logo: '/patrocinadores/zetti-galvanica.webp' },
  { name: 'Zurique Galvânica', category: 'Galvânica', booth: '24', slug: 'zurique-galvanica', logo: '/patrocinadores/zurique-galvanica.webp' },
]


export default function Patrocinadores() {
  usePageMeta({
    title: 'Patrocinadores — Alegria Expo Brutos 2026',
    description: 'Conheça as marcas que patrocinam a 7ª edição da Alegria Expo Brutos.',
    ogTitle: 'Patrocinadores · Alegria Expo Brutos',
    ogDescription:
      'As marcas que tornam possível a maior feira de semijoias em bruto da América Latina.',
  })

  const patrocinadoresOrdenados = [...patrocinadores].sort((a, b) =>
  a.name.localeCompare(b.name, 'pt-BR')
)

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
                      {patrocinadoresOrdenados.map((e) => (
                        <Link
                          key={e.slug}
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
