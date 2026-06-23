import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { ErrorBoundary } from '@/components/ErrorBoundary'

import Home from '@/pages/Home'
import RuaDaAlegria from '@/pages/RuaDaAlegria'
import Expositores from '@/pages/Expositores'
import Patrocinadores from '@/pages/Patrocinadores'
import ExpositorDetalhe from '@/pages/ExpositorDetalhe'
import PatrocinadorDetalhe from '@/pages/PatrocinadorDetalhe'
import NotFound from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[#070708] text-white">
        <SiteHeader />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rua-da-alegria" element={<RuaDaAlegria />} />

            <Route path="/expositores" element={<Expositores />} />
            <Route path="/expositores/:slug" element={<ExpositorDetalhe />} />

            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/patrocinadores/:slug" element={<PatrocinadorDetalhe />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </ErrorBoundary>
  )
}
