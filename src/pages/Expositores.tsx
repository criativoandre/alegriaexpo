import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

const expositores = [
  { name: 'A&B Brutos', category: 'Brincos · Pulseiras', booth: '01', slug: 'ab-brutos', logo: '/expositores/24.jpg' },
  { name: 'Atelier Limeira', category: 'Colares · Tornozeleiras', booth: '02', slug: 'atelier-limeira', logo: '/expositores/atelier-limeira.png' },
  { name: 'Bragoto Joias', category: 'Brutos · Linha completa', booth: '03', slug: 'bragoto-joias', logo: '/expositores/bragoto-joias.png' },
  { name: 'Dermond Acessórios', category: 'Brincos em tubos', booth: '04', slug: 'dermond-acessorios', logo: '/expositores/dermond-acessorios.png' },
  { name: 'Marcone & Cia', category: 'Brutos cravejados', booth: '05', slug: 'marcone-e-cia', logo: '/expositores/marcone-e-cia.png' },
  { name: 'Battiston Bijoux', category: 'Pulseiras · Anéis', booth: '06', slug: 'battiston-bijoux', logo: '/expositores/battiston-bijoux.png' },
  { name: 'Pizzoli Premium', category: 'Colares folheados', booth: '07', slug: 'pizzoli-premium', logo: '/expositores/pizzoli-premium.png' },
  { name: 'Beatriz Brutos', category: 'Linha básica', booth: '08', slug: 'beatriz-brutos', logo: '/expositores/beatriz-brutos.png' },
  { name: 'Roma Acessórios', category: 'Tornozeleiras', booth: '09', slug: 'roma-acessorios', logo: '/expositores/roma-acessorios.png' },
  { name: 'Guilherme Bijoux', category: 'Brutos especiais', booth: '10', slug: 'guilherme-bijoux', logo: '/expositores/guilherme-bijoux.png' },
  { name: 'Alegria Joias', category: 'Linha premium', booth: '11', slug: 'alegria-joias', logo: '/expositores/alegria-joias.png' },
  { name: 'Limeira Brutos', category: 'Mix completo', booth: '12', slug: 'limeira-brutos', logo: '/expositores/limeira-brutos.png' },
  { name: 'Bella Brutos', category: 'Brincos · Linha fina', booth: '13', slug: 'bella-brutos', logo: '/expositores/bella-brutos.png' },
  { name: 'Douratta Joias', category: 'Colares · Pulseiras', booth: '14', slug: 'douratta-joias', logo: '/expositores/douratta-joias.png' },
  { name: 'Nobre Acessórios', category: 'Anéis · Brincos', booth: '15', slug: 'nobre-acessorios', logo: '/expositores/nobre-acessorios.png' },
  { name: 'Vitrine dos Brutos', category: 'Mix completo', booth: '16', slug: 'vitrine-dos-brutos', logo: '/expositores/vitrine-dos-brutos.png' },
  { name: 'Luz Semi Joias', category: 'Linha premium', booth: '17', slug: 'luz-semi-joias', logo: '/expositores/luz-semi-joias.png' },
  { name: 'Mila Bijoux', category: 'Tornozeleiras · Colares', booth: '18', slug: 'mila-bijoux', logo: '/expositores/mila-bijoux.png' },
  { name: 'Rafa Brutos', category: 'Brutos cravejados', booth: '19', slug: 'rafa-brutos', logo: '/expositores/rafa-brutos.png' },
  { name: 'Prata Viva', category: 'Pulseiras · Anéis', booth: '20', slug: 'prata-viva', logo: '/expositores/prata-viva.png' },
  { name: 'Donna Joias', category: 'Brincos · Argolas', booth: '21', slug: 'donna-joias', logo: '/expositores/donna-joias.png' },
  { name: 'Elite Brutos', category: 'Linha completa', booth: '22', slug: 'elite-brutos', logo: '/expositores/elite-brutos.png' },
  { name: 'Floratta Acessórios', category: 'Colares delicados', booth: '23', slug: 'floratta-acessorios', logo: '/expositores/floratta-acessorios.png' },
  { name: 'Brilho Limeira', category: 'Brutos · Folheados', booth: '24', slug: 'brilho-limeira', logo: '/expositores/brilho-limeira.png' },
  { name: 'Luna Bijoux', category: 'Linha feminina', booth: '25', slug: 'luna-bijoux', logo: '/expositores/luna-bijoux.png' },
  { name: 'Maison dos Brutos', category: 'Brutos especiais', booth: '26', slug: 'maison-dos-brutos', logo: '/expositores/maison-dos-brutos.png' },
  { name: 'Diva Acessórios', category: 'Brincos · Pulseiras', booth: '27', slug: 'diva-acessorios', logo: '/expositores/diva-acessorios.png' },
  { name: 'Gold Mix Joias', category: 'Mix atacado', booth: '28', slug: 'gold-mix-joias', logo: '/expositores/gold-mix-joias.png' },
  { name: 'Valentina Brutos', category: 'Linha básica', booth: '29', slug: 'valentina-brutos', logo: '/expositores/valentina-brutos.png' },
  { name: 'Imperial Bijoux', category: 'Anéis · Colares', booth: '30', slug: 'imperial-bijoux', logo: '/expositores/imperial-bijoux.png' },
  { name: 'Safira Acessórios', category: 'Tornozeleiras · Pulseiras', booth: '31', slug: 'safira-acessorios', logo: '/expositores/safira-acessorios.png' },
  { name: 'Aurora Brutos', category: 'Brutos premium', booth: '32', slug: 'aurora-brutos', logo: '/expositores/aurora-brutos.png' },
  { name: 'Cristal Joias', category: 'Brincos cravejados', booth: '33', slug: 'cristal-joias', logo: '/expositores/cristal-joias.png' },
  { name: 'Estilo Limeira', category: 'Linha completa', booth: '34', slug: 'estilo-limeira', logo: '/expositores/estilo-limeira.png' },
  { name: 'Magnata Brutos', category: 'Brutos · Atacado', booth: '35', slug: 'magnata-brutos', logo: '/expositores/magnata-brutos.png' },
  { name: 'Charme Bijoux', category: 'Colares · Argolas', booth: '36', slug: 'charme-bijoux', logo: '/expositores/charme-bijoux.png' },
  { name: 'Vênus Acessórios', category: 'Pulseiras · Tornozeleiras', booth: '37', slug: 'venus-acessorios', logo: '/expositores/venus-acessorios.png' },
  { name: 'Prime Brutos', category: 'Mix completo', booth: '38', slug: 'prime-brutos', logo: '/expositores/prime-brutos.png' },
  { name: 'La Belle Joias', category: 'Linha premium', booth: '39', slug: 'la-belle-joias', logo: '/expositores/la-belle-joias.png' },
  { name: 'Opala Bijoux', category: 'Brincos · Anéis', booth: '40', slug: 'opala-bijoux', logo: '/expositores/opala-bijoux.png' },
  { name: 'Realeza Brutos', category: 'Brutos especiais', booth: '41', slug: 'realeza-brutos', logo: '/expositores/realeza-brutos.png' },
  { name: 'Mirella Acessórios', category: 'Colares folheados', booth: '42', slug: 'mirella-acessorios', logo: '/expositores/mirella-acessorios.png' },
  { name: 'Bruto Chic', category: 'Brutos cravejados', booth: '43', slug: 'bruto-chic', logo: '/expositores/bruto-chic.png' },
  { name: 'Luxor Joias', category: 'Linha sofisticada', booth: '44', slug: 'luxor-joias', logo: '/expositores/luxor-joias.png' },
  { name: 'Essenza Bijoux', category: 'Brincos · Pulseiras', booth: '45', slug: 'essenza-bijoux', logo: '/expositores/essenza-bijoux.png' },
  { name: 'Aliança dos Brutos', category: 'Linha completa', booth: '46', slug: 'alianca-dos-brutos', logo: '/expositores/alianca-dos-brutos.png' },
  { name: 'Glamour Acessórios', category: 'Anéis · Colares', booth: '47', slug: 'glamour-acessorios', logo: '/expositores/glamour-acessorios.png' },
  { name: 'Limeira Gold', category: 'Folheados · Brutos', booth: '48', slug: 'limeira-gold', logo: '/expositores/limeira-gold.png' },
  { name: 'Marina Bijoux', category: 'Linha básica', booth: '49', slug: 'marina-bijoux', logo: '/expositores/marina-bijoux.png' },
  { name: 'Suprema Joias', category: 'Mix premium', booth: '50', slug: 'suprema-joias', logo: '/expositores/suprema-joias.png' },
]

export default function Expositores() {
  usePageMeta({
    title: 'Expositores — Alegria Expo Brutos 2026',
    description:
      'Conheça as marcas e fabricantes que estarão na 7ª edição da Alegria Expo Brutos, na Rua da Alegria, em Limeira.',
    ogTitle: 'Expositores · Alegria Expo Brutos',
    ogDescription: 'Fabricantes de semijoias em bruto reunidos por três dias na Rua da Alegria.',
  })

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
            {expositores.map((e) => (
              <Link
                key={e.booth}
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
