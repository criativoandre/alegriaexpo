import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const expositores = [
  const expositores = [
  { name: 'Adonai Brutos', category: 'Brutos', booth: '01', slug: 'adonai-brutos', logo: '/expositores/adonai-brutos.webp' },
  { name: 'AEBE Brutos', category: 'Brutos', booth: '02', slug: 'aebe-brutos', logo: '/expositores/aebe-brutos.webp' },
  { name: 'Agape Brutos', category: 'Brutos', booth: '03', slug: 'agape-brutos', logo: '/expositores/agape-brutos.webp' },
  { name: 'Ale Aço Inox', category: 'Aço Inox', booth: '04', slug: 'ale-aco-inox', logo: '/expositores/ale-aco-inox.webp' },
  { name: 'Cirlete Brutos', category: 'Brutos', booth: '05', slug: 'cirlete-brutos', logo: '/expositores/cirlete-brutos.webp' },
  { name: 'DC Brutos', category: 'Brutos', booth: '06', slug: 'dc-brutos', logo: '/expositores/dc-brutos.webp' },
  { name: 'Dunamis Brutos', category: 'Brutos', booth: '07', slug: 'dunamis-brutos', logo: '/expositores/dunamis-brutos.webp' },
  { name: 'Efatá Brutos', category: 'Brutos', booth: '08', slug: 'efata-brutos', logo: '/expositores/efata-brutos.webp' },
  { name: 'Ferreira Brutos', category: 'Brutos', booth: '09', slug: 'ferreira-brutos', logo: '/expositores/ferreira-brutos.webp' },
  { name: 'Fortunato Brutos', category: 'Brutos', booth: '10', slug: 'fortunato-brutos', logo: '/expositores/fortunato-brutos.webp' },
  { name: 'Galete Brutos', category: 'Brutos', booth: '11', slug: 'galete-brutos', logo: '/expositores/galete-brutos.webp' },
  { name: 'GMF Brutos', category: 'Brutos', booth: '12', slug: 'gmf-brutos', logo: '/expositores/gmf-brutos.webp' },
  { name: 'Guerra Inox', category: 'Aço Inox', booth: '13', slug: 'guerra-inox', logo: '/expositores/guerra-inox.webp' },
  { name: 'Ingrid Brutos', category: 'Brutos', booth: '14', slug: 'ingrid-brutos', logo: '/expositores/ingrid-brutos.webp' },
  { name: 'JB Loja da Maleta', category: 'Acessórios', booth: '15', slug: 'jb-loja-da-maleta', logo: '/expositores/jb-loja-da-maleta.webp' },
  { name: 'Kairós Brutos', category: 'Brutos', booth: '16', slug: 'kairos-brutos', logo: '/expositores/kairos-brutos.webp' },
  { name: 'Laura Martins', category: 'Semijoias', booth: '17', slug: 'laura-martins', logo: '/expositores/laura-martins.webp' },
  { name: 'Lucco Brutos', category: 'Brutos', booth: '18', slug: 'lucco-brutos', logo: '/expositores/lucco-brutos.webp' },
  { name: 'Maju Brutos', category: 'Brutos', booth: '19', slug: 'maju-brutos', logo: '/expositores/maju-brutos.webp' },
  { name: 'Milly Brutos', category: 'Brutos', booth: '20', slug: 'milly-brutos', logo: '/expositores/milly-brutos.webp' },
  { name: 'Nogueira Brutos', category: 'Brutos', booth: '21', slug: 'nogueira-brutos', logo: '/expositores/nogueira-brutos.webp' },
  { name: 'Ornare Brutos', category: 'Brutos', booth: '22', slug: 'ornare-brutos', logo: '/expositores/ornare-brutos.webp' },
  { name: 'Philos Brutos', category: 'Brutos', booth: '23', slug: 'philos-brutos', logo: '/expositores/philos-brutos.webp' },
  { name: 'Princesa Brutos', category: 'Brutos', booth: '24', slug: 'princesa-brutos', logo: '/expositores/princesa-brutos.webp' },
  { name: 'Rei das Pulseiras', category: 'Pulseiras', booth: '25', slug: 'rei-das-pulseiras', logo: '/expositores/rei-das-pulseiras.webp' },
  { name: 'Rheal Compose', category: 'Semijoias', booth: '26', slug: 'rheal-compose', logo: '/expositores/rheal-compose.webp' },
  { name: 'Safira Brutos', category: 'Semijoias', booth: '27', slug: 'safira-brutos', logo: '/expositores/safira-brutos.webp' },
  { name: 'Santana Brutos', category: 'Brutos', booth: '28', slug: 'santana-brutos', logo: '/expositores/santana-brutos.webp' },
  { name: 'Tank Brutos', category: 'Brutos', booth: '29', slug: 'tank-brutos', logo: '/expositores/tank-brutos.webp' },
  { name: 'Toda Diva', category: 'Acessórios', booth: '30', slug: 'toda-diva', logo: '/expositores/toda-diva.webp' },
  { name: 'Uzzi Brutos', category: 'Brutos', booth: '31', slug: 'uzzi-brutos', logo: '/expositores/uzzi-brutos.webp' },
  { name: 'Yan Brutos', category: 'Brutos', booth: '32', slug: 'yan-brutos', logo: '/expositores/yan-brutos.webp' },
  { name: 'Yes Brutos', category: 'Brutos', booth: '33', slug: 'yes-brutos', logo: '/expositores/yes-brutos.webp' },
]

export default function Expositores() {
  usePageMeta({
    title: 'Expositores — Alegria Expo Brutos 2026',
    description:
      'Conheça as marcas e fabricantes que estarão na 7ª edição da Alegria Expo Brutos, na Rua da Alegria, em Limeira.',
    ogTitle: 'Expositores · Alegria Expo Brutos',
    ogDescription: 'Fabricantes de semijoias em bruto reunidos por três dias na Rua da Alegria.',
  })

  const expositoresOrdenados = [...expositores].sort((a, b) =>
  a.name.localeCompare(b.name, 'pt-BR')
)

  return (
    <>
      <section className="relative panel-noir text-white pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/10">
        <div className="container-edge grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <div className="tag-soft">Edição 2026</div>
            <h1 className="mt-8 font-display text-[14vw] md:text-[9rem] leading-[0.92] text-[#f3e9d6]">
              Nossos
              <br />
              <span className="display-italic text-[#fb00e4]">expositores.</span>
            </h1>
          </div>
          <p className="text-lg text-white/75 leading-relaxed max-w-md">
            Fabricantes e marcas reunidos por três dias na Rua da Alegria. Negocie direto com quem
            produz e descubra as próximas tendências do mercado.
          </p>
        </div>
      </section>

      <section className="bg-[#070708] text-white">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl md:text-6xl text-[#f3e9d6]">
              <span className="display-italic">{expositores.length}</span> marcas confirmadas
            </h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
              Atualizado para a 7ª edição
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {expositoresOrdenados.map((e) => (
              <Link
                key={e.slug}
                to={`/expositores/${e.slug}`}
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
            Quer expor na <span className="display-italic">próxima edição?</span>
          </h2>
          <div className="md:justify-self-end">
            <Link to="/" className="btn-elegant mt-10 !bg-[#ffffff] !text-[#000000] hover:!bg-[#0100F4] hover:!text-[#ffffff]">
              Falar com a organização →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
