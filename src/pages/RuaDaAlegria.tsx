import { Link } from 'react-router-dom'
import { Marquee } from '@/components/site/Marquee'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function RuaDaAlegria() {
  usePageMeta({
    title: 'Rua da Alegria — O polo das semijoias em bruto · Limeira',
    description:
      'Conheça a história da Rua da Alegria, em Limeira: o maior polo de fabricantes de semijoias em bruto da América Latina.',
    ogTitle: 'Rua da Alegria · Limeira',
    ogDescription:
      'O coração da indústria brasileira de semijoias, com mais de 50 empresas em três ruas.',
  })

  return (
    <>
      {/* HERO split-screen */}
      <section className="relative bg-[#070708] text-white">
        <div className="grid md:grid-cols-2 min-h-[90vh]">
          <div className="relative panel-noir flex items-end">
            <div className="px-6 md:px-14 pt-40 pb-16 w-full">
              <div className="tag-soft">Limeira · São Paulo</div>
              <h1 className="mt-8 font-display text-[14vw] md:text-[8.5rem] leading-[0.9] text-[#f3e9d6]">
                Rua da
                <br />
                <span className="display-italic text-[#fb00e4]">Alegria.</span>
              </h1>
            </div>
          </div>
          <div className="relative panel-electric flex items-center">
            <div className="px-6 md:px-14 pt-40 pb-16">
              <p className="font-display italic text-3xl md:text-4xl text-[#f3e9d6] leading-tight max-w-md">
                Muito mais do que um nome marcante.
              </p>
              <p className="mt-8 max-w-md text-white/85 text-lg leading-relaxed">
                O principal destino de quem busca joias, semijoias e bijuterias com variedade,
                qualidade e preço competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        variant="black"
        items={['Beatriz Bragoto Dermond', 'Marquês Guilherme Marcone', 'Roma Pizzoli Battiston']}
      />

      {/* HISTORY */}
      <section className="bg-[#070708] text-white">
        <div className="container-edge py-28 md:py-40 grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <div className="tag-soft">A história</div>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
              Conheça nossa <span className="display-italic text-[#0100f4]">história.</span>
            </h2>
          </div>
          <div className="space-y-7 text-lg text-white/75 leading-relaxed">
            <p className="text-2xl md:text-3xl font-display italic text-white/95 leading-snug">
              Localizada no coração de Limeira, a região concentra grandes fornecedores e
              tendências do mercado.
            </p>
            <p>
              Atrai lojistas, revendedores e apaixonados por acessórios de todo o país.
            </p>
            <p className="text-white/90">
              Se você quer comprar melhor, vender mais e estar por dentro do que realmente gira o
              mercado, é aqui que tudo acontece.
            </p>
          </div>
        </div>
      </section>

      {/* POLO */}
      <section className="panel-electric text-white border-y border-white/10">
        <div className="container-edge py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-[#f3e9d6]">
              O maior polo
              <br />
              <span className="display-italic">de fabricantes</span>
              <br />
              da América Latina.
            </h2>
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                As ruas <strong>Beatriz Bragoto Dermond</strong>,{' '}
                <strong>Marquês Guilherme Marcone</strong> e{' '}
                <strong>Roma Pizzoli Battiston</strong> formam o núcleo que consolidou Limeira
                como referência nacional no setor.
              </p>
              <p>
                Foi na Rua Beatriz Bragoto Dermond que tudo começou: um ponto estratégico que
                atraiu compradores em busca de variedade, preço competitivo e peças com alto valor
                percebido.
              </p>
              <p className="text-white">
                O crescimento foi natural — e transformou toda a região no que hoje é conhecido
                como Rua da Alegria.
              </p>
            </div>
          </div>

          <div className="mt-20 grid sm:grid-cols-3 gap-px bg-white/20 border border-white/20">
            {[
              { k: '+50', v: 'Empresas reunidas' },
              { k: '03', v: 'Ruas no núcleo' },
              { k: '01', v: 'Polo do país' },
            ].map((s) => (
              <div key={s.v} className="panel-electric p-10 md:p-12">
                <div className="font-display text-7xl md:text-8xl leading-none text-[#f3e9d6]">
                  {s.k}
                </div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.32em] text-white/70">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT */}
      <section className="bg-[#070708] text-white">
        <div className="container-edge py-28 md:py-40 grid gap-12 md:grid-cols-[1.2fr_1fr] items-end">
          <div>
            <div className="tag-soft">Acesso direto</div>
            <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
              Onde o mercado acontece <span className="display-italic text-[#fb00e4]">de verdade.</span>
            </h2>
            <div className="mt-10 space-y-5 text-lg text-white/75 leading-relaxed max-w-2xl">
              <p>
                Aqui, não é só compra e venda — é acesso direto ao que está em alta. Novos
                designs chegam o tempo todo, acompanhando o ritmo da moda.
              </p>
              <p>
                Peças que giram rápido no estoque e chamam atenção no ponto de venda, tudo no
                coração de Limeira, o principal polo de semijoias do país.
              </p>
            </div>
          </div>
          <Link
            to="/expositores"
            className="btn-elegant self-end justify-self-start md:justify-self-end !bg-[#FF00E7] !text-[#ffffff] hover:!bg-[#0100F4] hover:!text-[#ffffff]"
          >
            Conheça os expositores →
          </Link>
        </div>
      </section>
    </>
  )
}
