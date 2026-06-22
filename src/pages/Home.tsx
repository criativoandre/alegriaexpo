import { Link } from 'react-router-dom'
import { Marquee } from '@/components/site/Marquee'
import { usePageMeta } from '@/hooks/usePageMeta'
import heroFrameImage from '@/assets/hero-frame.webp';
import cardImg01 from '@/assets/card-1.webp'
import cardImg02 from '@/assets/card-2.webp'
import cardImg03 from '@/assets/card-3.webp'
import dateCardBg from '@/assets/date-card-bg.webp'

export default function Home() {
  usePageMeta({
    title: 'Alegria Expo Brutos — 26, 27 e 28 de Maio · Limeira',
    description:
      'A maior feira de semijoias em bruto da América Latina. Três dias direto com quem fabrica, na tradicional Rua da Alegria, em Limeira.',
    ogTitle: 'Alegria Expo Brutos — Edição 2026',
    ogDescription:
      'Três dias para descobrir fornecedores, negociar direto da fonte e sair com oportunidades reais de negócio.',
  })

  return (
    <>
      {/* HERO — split screen with center frame */}
      <section className="relative bg-[#070708] text-white overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[100vh]">

          {/* LEFT */}
          <div className="relative panel-electric overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

              <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 md:pr-[24vw] pt-36 pb-14 md:py-32">
              <div className="tag-soft text-[#f3e9d6]">
                Alegria · 7ª Edição
              </div>

              <h1 className="mt-8 font-display text-[14vw] md:text-[6.5rem] xl:text-[7.5rem] leading-[0.9] text-[#f3e9d6]">
                Abrace o brilho
                <br />
                <span className="display-italic">do que é</span>
                <br />
                único.
              </h1>
            </div>
          </div>

          {/* CENTER FRAME — MOBILE */}
          <div className="md:hidden relative z-10 px-6 -mt-6 -mb-6">
            <div className="relative mx-auto w-full max-w-[340px] aspect-[3/4] shadow-2xl overflow-hidden">
              <img
                src={heroFrameImage}
                alt="Feira de semijoias Rua da Alegria"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-5 border border-white/35 pointer-events-none" />

              <div className="relative z-10 h-full w-full flex flex-col justify-end p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/70">
                  26 · 27 · 28 Maio
                </div>

                <div className="mt-3 font-display italic text-3xl text-white">
                  Rua da Alegria
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative panel-noir flex items-center">
              <div className="relative z-10 px-6 md:px-14 md:pl-[24vw] pt-10 pb-20 md:py-32 w-full">
              <div className="font-display italic text-4xl md:text-6xl text-[#f3e9d6] leading-tight">
                Edição 2026
              </div>

              <p className="mt-8 max-w-md text-white/75 leading-relaxed text-lg">
                A maior feira de semijoias em <strong>bruto</strong> da América Latina.
                Três dias direto com quem fabrica, no coração da Rua da Alegria, em Limeira.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
                {[
                  { k: '+50', v: 'Marcas' },
                  { k: '03', v: 'Dias' },
                  { k: '7ª', v: 'Edição' },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-5xl md:text-6xl text-[#f3e9d6]">
                      {s.k}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CENTER FRAME — DESKTOP */}
        <div className="hidden md:block absolute left-1/2 top-1/2 z-20 w-[30vw] max-w-[460px] min-w-[340px] aspect-[3/4] -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-full w-full panel-magenta shadow-2xl overflow-hidden">
            <img
              src={heroFrameImage}
              alt="Feira de semijoias Rua da Alegria"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-6 border border-white/35 pointer-events-none" />

            <div className="relative z-10 h-full w-full flex flex-col justify-end p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/70">
                26 · 27 · 28 Maio
              </div>

              <div className="mt-3 font-display italic text-4xl text-white">
                Rua da Alegria
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        variant="black"
        items={[
          'Alegria Expo Brutos',
          'Semijoias em bruto',
          'Direto da fonte',
          'Limeira · SP',
          'Edição 2026',
        ]}
      />

      {/* ABOUT — editorial split */}
      <section className="bg-[#070708] text-white">
        <div className="container-edge py-28 md:py-40 grid gap-16 md:grid-cols-[1fr_1.3fr] items-center">

          <div className="md:sticky md:top-32">
            <div className="tag-soft">A feira</div>

            <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
              Conectando você{' '}
              <span className="display-italic text-[#fb00e4]">diretamente</span>{' '}
              com quem fabrica.
            </h2>
          </div>

          <div className="space-y-7 text-white/75 text-lg leading-relaxed">
            <p className="text-2xl md:text-3xl font-display italic text-white/95 leading-snug">
              Três dias para descobrir fornecedores, negociar direto da fonte e sair com
              oportunidades reais de negócio.
            </p>

            <p>
              O evento conecta fabricantes e compradores em um ambiente pensado para gerar
              negócios, fortalecer parcerias e apresentar novidades do setor.
            </p>

            <p className="text-white/90">
              Mais do que uma feira, é um ponto de encontro estratégico para quem quer crescer no
              mercado.
            </p>
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS — three editorial cards */}
      <section className="bg-[#0b0b10] text-white border-t border-white/5">
        <div className="container-edge py-28 md:py-40">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-end mb-20">
            <div>
              <div className="tag-soft">O encontro</div>
              <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
                Um dos maiores encontros de <span className="display-italic">semijoias</span> do
                Brasil.
              </h2>
            </div>
            <p className="text-white/65 text-lg leading-relaxed md:pl-10">
              Realizada na tradicional Rua da Alegria, em Limeira, a Expo Brutos reúne
              fabricantes, fornecedores e profissionais do mercado em um ambiente focado na
              geração de negócios.
            </p>
          </div>

          <div className="grid gap-px md:grid-cols-3 bg-white/10">
            {[
              {
                n: '01',
                t: 'Direto da fonte',
                d: 'Sem intermediários. Conheça fabricantes, condições reais e prazos honestos.',
                panel: 'panel-noir',
                image: cardImg01,
              },
              {
                n: '02',
                t: 'Tendências antes',
                d: 'Novos designs e coleções que vão pautar a próxima temporada do varejo.',
                panel: 'panel-electric',
                image: cardImg02,
              },
              {
                n: '03',
                t: 'Networking real',
                d: 'Parcerias com lojistas, revendedores e marcas que movem o mercado.',
                panel: 'panel-noir',
                image: cardImg03,
              },
            ].map((c) => (
              <article
                key={c.n}
                className={`${c.panel} relative overflow-hidden p-10 md:p-12 min-h-[420px] flex flex-col justify-between`}
              >
                {/* Imagem + overlay */}
                <div className="absolute inset-0">
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-full object-cover opacity-25"
                  />

                  {/* Overlay somente sobre a imagem */}
                  <div className="absolute inset-0" />
                </div>

                {/* Número do card */}
                <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.32em] text-white/60">
                  
                </div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  <h3 className="font-display text-4xl md:text-5xl text-[#f3e9d6] leading-tight">
                    {c.t}
                  </h3>

                  <p className="mt-5 text-white/80 leading-relaxed">
                    {c.d}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS BLOCK */}
      <section className="panel-magenta text-white">
        <div className="container-edge py-28 md:py-36 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="tag-soft">Patrocinadores</div>
            <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1]">
              Marcas que fazem a <span className="display-italic">7ª edição</span> acontecer.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <Link to="/patrocinadores" className="btn-elegant !text-[#ffffff] hover:!bg-[#0100F4] hover:!text-[#ffffff]">
              Conheça os patrocinadores →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — date card */}
      <section className="bg-[#070708] text-white">
        <div className="container-edge py-28 md:py-40">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-px bg-white/10 border border-white/10">
            <div className="bg-[#070708] p-12 md:p-16">
              <div className="tag-soft">Lojas participantes</div>
              <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
                Mais de <span className="display-italic text-[#0100f4]">50 empresas</span>{' '}
                esperando você.
              </h2>
              <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
                Conheça a lista completa de expositores da Alegria Expo Brutos e planeje sua
                visita à Rua da Alegria.
              </p>
              <Link
                to="/expositores"
                className="btn-elegant mt-8 !px-8 md:!px-10 !py-3 md:!py-4 !text-xs md:!text-sm !bg-[#0100F4] !text-[#ffffff] hover:!bg-[#FF00E7] hover:!text-[#ffffff]"
              >
                Conheça os expositores →
              </Link>
            </div>
            <div className="panel-electric relative overflow-hidden p-12 md:p-16 flex flex-col justify-between min-h-[420px]">

              {/* Imagem de fundo */}
              <img
                src={dateCardBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />

              {/* Overlay para deixar a imagem sutil */}
              <div className="absolute inset-0 bg-[#070708]/70" />

              {/* Conteúdo */}
              <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.32em] text-white/70">
                Próxima edição
              </div>

              <div className="relative z-10">
                <div className="font-display text-[7rem] md:text-[10rem] leading-none text-[#f3e9d6]">
                  26
                </div>

                <div className="font-display italic text-3xl mt-2 text-white">
                  27 · 28 · Maio
                </div>

                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.32em] text-[#f3e9d6]">
                  Rua da Alegria · Limeira
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
