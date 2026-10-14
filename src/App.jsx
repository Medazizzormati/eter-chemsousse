import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Intro from './components/Intro'
import Header from './components/Header'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import Page from './components/Page'
import Home from './components/Home'
import Boutique from './components/Boutique'
import Parfums from './components/Parfums'
import Galerie from './components/Galerie'
import Contact from './components/Contact'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
const page = (title, el) => <Page title={title}><Reveal>{el}</Reveal></Page>

export default function App() {
  const { pathname } = useLocation()
  const phase = useSelector((s) => s.ui.introPhase)
  return (
    <>
      {phase !== 'playing' && (
      <div className={phase === 'leaving' ? 'site site-enter' : 'site'}>
      <ScrollTop />
      <Header />
      <main key={pathname} className="pg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={page('La boutique', <Boutique />)} />
          <Route path="/parfums" element={page('Parfums', <Parfums />)} />
          <Route path="/galerie" element={page('Galerie', <Galerie />)} />
          <Route path="/contact" element={page('Contact et accès', <Contact />)} />
          <Route path="*" element={page('Page introuvable', (
            <section className="sec"><div className="wrap center"><h2>Page introuvable</h2><Link className="btn solid" to="/">Retour à l’accueil</Link></div></section>
          ))} />
        </Routes>
      </main>
      <Footer />
      </div>
      )}
      {phase !== 'done' && <Intro />}
    </>
  )
}
