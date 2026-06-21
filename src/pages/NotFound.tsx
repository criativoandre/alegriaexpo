import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import notFoundImage from '@/assets/not-found.png'

export default function NotFound() {
  usePageMeta({
    title: 'Página não encontrada — Alegria Expo Brutos',
    description: 'A página que você procura não existe ou foi movida.',
  })

  return (
    <div className="min-h-screen bg-[#070708] text-white flex items-center">
      <div className="container-edge grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="tag-soft">404 · página perdida</div>
          <h1 className="mt-6 font-display text-[18vw] md:text-[12rem] leading-none italic text-[#fb00e4]">
            404
          </h1>
          <p className="mt-4 max-w-md text-white/70">
            Essa página saiu para dar uma volta na Rua da Alegria. Bora voltar pra home?
          </p>
          <Link to="/" className="btn-elegant is-electric mt-8">
            ← Voltar para o início
          </Link>
        </div>
        <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#0100f4] via-[#3a0aa8] to-[#fb00e4]">
          <img
            src={notFoundImage}
            alt="Alegria Expo Brutos"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>
    </div>
  )
}
