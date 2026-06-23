import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Home from '@/pages/Home'
import RuaDaAlegria from '@/pages/RuaDaAlegria'
import Expositores from '@/pages/Expositores'
import Patrocinadores from '@/pages/Patrocinadores'
import NotFound from '@/pages/NotFound'

// Páginas Expositores
import AdonaiBrutos from '@/pages/expositores/adonai-brutos'
import AebeBrutos from '@/pages/expositores/aebe-brutos'

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
            <Route path="/patrocinadores" element={<Patrocinadores />} />

            // Páginas Expositores
            <Route path="/expositores/adonai-brutos" element={<AdonaiBrutos />} />
            <Route path="/expositores/aebe-brutos" element={<AebeBrutos />} />


            // Páginas Expositores

            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </ErrorBoundary>
  )
}
