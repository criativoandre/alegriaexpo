import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function AebeBrutos() {
  usePageMeta({
    title: 'AEBE Brutos · Alegria Expo Brutos',
    description:
      'Modelo de página de expositor da Alegria Expo Brutos. Use esta página como base para apresentar cada marca participante.',
    ogTitle: 'AEBE Brutos · Alegria Expo Brutos',
    ogDescription: 'A confluência de elegância e tendência em acessórios de moda.',
  })

  return (
    <>
      <section className="bg-[#070708] text-white pt-32 border-b border-white/10">
        <div className="container-edge py-6 flex flex-wrap gap-3 items-center">
          <Link
            to="/"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/25">/</span>
          <Link
            to="/expositores"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 hover:text-white"
          >
            Expositores
          </Link>
          <span className="text-white/25">/</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white">
            A&amp;B Brutos
          </span>
        </div>
      </section>

{/* HERO — split */}
<section className="relative bg-[#070708] text-white">
  <div className="grid md:grid-cols-2 min-h-[80vh]">
    <div className="relative panel-magenta flex items-center">
      <div className="px-6 md:px-14 py-20 w-full">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="tag is-electric">Expositor</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
          <div className="shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white border border-white/30 flex items-center justify-center overflow-hidden rounded-xl p-2">
            <img
              src="/expositores/24.jpg"
              alt="Logo A&B Brutos"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-[#f3e9d6]">
            A&amp;B
            <br />
            <span className="display-italic font-normal">Brutos.</span>
          </h1>
        </div>
      </div>
    </div>

    <div className="relative panel-noir flex items-center">
      <div className="px-6 md:px-14 py-20">
        <p className="font-display italic text-3xl md:text-4xl text-[#f3e9d6] leading-tight max-w-md">
          A confluência de elegância e tendência em acessórios de moda.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://wa.me/5519992260693" className="btn-elegant is-magenta">
            (19) 99226.0693
          </a>

          <a href="#" className="btn-elegant">
            Instagram →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
<section className="bg-[#070708] text-white">
  <div className="container-edge py-28 md:py-36">
    <div className="max-w-5xl mx-auto space-y-7 text-lg md:text-xl text-white/80 leading-relaxed">
      <div className="tag-soft">Sobre a marca</div>

      <p className="font-display italic text-3xl md:text-5xl text-[#f3e9d6] leading-tight">
        No cenário contemporâneo da moda, é inegável o papel crucial que os acessórios
        desempenham na articulação do estilo e personalidade.
      </p>

      <p>
        Entre as marcas que têm feito um trabalho notável nesse domínio, destaca-se a{' '}
        <strong>A&amp;B Brutos</strong>, uma empresa dedicada a oferecer uma gama variada de
        acessórios que seguem as tendências atuais e elevam a beleza feminina com sutileza e
        elegância.
      </p>

      <p>
        A A&amp;B Brutos faz um trabalho meticuloso ao selecionar peças que ressoam com as
        preferências estilísticas contemporâneas, assegurando que suas ofertas estejam
        sempre alinhadas com o que é atual e desejável.
      </p>

      <p>
        Uma das marcas registradas é a ênfase intransigente na qualidade — cada cliente
        merece nada menos que excelência, e essa convicção guia a seleção de cada peça.
      </p>
    </div>
  </div>
</section>

      {/* COLLECTION */}
<section className="panel-noir text-white border-y border-white/10">
  <div className="container-edge py-28 md:py-36">
    <div className="tag-soft">Coleção</div>

    <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
      Brincos. Pulseiras. <span className="display-italic text-[#fb00e4]">Tornozeleiras.</span>{' '}
      Colares.
    </h2>

    <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-white/10 border border-white/10">
      {[
        {
          t: 'Brincos',
          d: 'Linha completa, do básico ao statement.',
          img: '/expositores/colecao-brincos.webp',
        },
        {
          t: 'Brincos em tubos',
          d: 'Formato exclusivo da casa.',
          img: '/expositores/colecao-brincos-em-tubos.webp',
        },
        {
          t: 'Pulseiras',
          d: 'Clássicas e tendência.',
          img: '/expositores/colecao-pulseiras.webp',
        },
        {
          t: 'Colares & tornozeleiras',
          d: 'Para compor o look inteiro.',
          img: '/expositores/colecao-colares-tornozeleiras.webp',
        },
      ].map((c) => (
        <div
          key={c.t}
          className="group panel-noir min-h-[360px] flex flex-col overflow-hidden"
        >
          <div className="aspect-[4/3] w-full bg-white/5 overflow-hidden">
            <img
              src={c.img}
              alt={c.t}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="p-8 md:p-10 flex-1 flex flex-col justify-end">
            <h3 className="font-display text-3xl md:text-4xl text-[#f3e9d6] leading-tight">
              {c.t}
            </h3>

            <p className="mt-3 text-white/65 text-sm leading-relaxed">
              {c.d}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PERSONAL */}
<section className="bg-[#070708] text-white">
  <div className="container-edge py-28 md:py-36">
    <div className="max-w-5xl mx-auto">
      <div className="tag-soft">Atendimento</div>

      <h2 className="mt-8 font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
        Cada interação é <span className="display-italic text-[#fb00e4]">moldada</span> para
        você.
      </h2>

      <div className="mt-10 space-y-6 text-lg md:text-xl text-white/75 leading-relaxed">
        <p>
          Os acessórios da A&amp;B Brutos são mais do que adornos: são extensões da identidade
          feminina, pensados para realçar a beleza com sutileza, elegância e personalidade.
        </p>

        <p>
          Cada peça carrega uma proposta de estilo, combinando tendências contemporâneas com
          acabamento cuidadoso para atender diferentes perfis, ocasiões e formas de expressão.
        </p>

        <p>
          O atendimento valoriza a proximidade com o cliente, oferecendo uma experiência mais
          atenta, consultiva e alinhada às necessidades de quem busca acessórios marcantes para
          compor sua coleção.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* VISIT */}
<section className="panel-electric text-white">
  <div className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
    <h2 className="font-display text-5xl md:text-7xl text-[#f3e9d6] leading-[1]">
      Venha nos <span className="display-italic">visitar.</span>
    </h2>

    <div className="md:justify-self-end md:text-right flex flex-col justify-center items-start md:items-end min-h-[220px]">
      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/65">
        Na Rua da Alegria
      </div>

      <div className="mt-4 font-display italic text-3xl md:text-4xl text-[#f3e9d6]">
        26 · 27 · 28 de Maio
      </div>

      <a
        href="https://wa.me/5519992260693"
        className="btn-elegant is-magenta mt-10 inline-flex"
      >
        Falar no WhatsApp →
      </a>
    </div>
  </div>
</section>

      {/* MAP */}
<section className="bg-[#070708] text-white border-t border-white/10">
  <div className="container-edge pt-20 pb-10">
    <div className="tag-soft">Localização</div>
  </div>

  <div className="relative h-[450px] w-full overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.873523528434!2d-47.4042898!3d-22.5651478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87fd4025da295%3A0xc1566a0bcfa14144!2sRua%20da%20Alegria%20-%20Limeira%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(1) contrast(90%)' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa Rua da Alegria"
      className="absolute inset-0 opacity-80"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-[#070708]/30 pointer-events-none" />
  </div>
</section>
    </>
  )
}
