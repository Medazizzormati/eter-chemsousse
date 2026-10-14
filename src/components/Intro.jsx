import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLeaving, finishIntro } from '../store/uiSlice'

const CLIP = 3.2          // clip length in seconds
const SWITCH_AT = 3.0     // after 3 s the camera "goes through the door" into the site
const HERO_IMAGES = ['/assets/flacon-or.jpg', '/assets/flacons3.jpg']

// 3-second immersive intro: storefront -> walking in. The site is already mounted underneath when the transition starts.
export default function Intro() {
  const dispatch = useDispatch()
  const leaving = useSelector((s) => s.ui.introPhase) === 'leaving'
  const ref = useRef(null)
  const [pct, setPct] = useState(0)
  // Full page on every screen: horizontal clip on landscape screens, the original vertical clip on portrait screens (phones).
  const [portrait] = useState(() => !!(window.matchMedia && window.matchMedia('(orientation: portrait)').matches))
  const src = portrait ? '/assets/intro.mp4' : '/assets/intro-wide.mp4'
  const poster = portrait ? '/assets/intro-poster.jpg' : '/assets/intro-wide-poster.jpg'
  const go = useCallback(() => dispatch(startLeaving()), [dispatch])

  useEffect(() => {
    // The intro always lasts ~3 s. If the video cannot play (blocked, slow, unsupported), the poster is shown
    // with the same camera push-in, so the visitor still gets the "entering the shop" effect.
    const v = ref.current
    const p = v && v.play()
    if (p && p.catch) p.catch(() => {})
    const timer = setTimeout(go, SWITCH_AT * 1000)
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300))
    idle(() => HERO_IMAGES.forEach((src) => { const i = new Image(); i.src = src }))   // warm the cache for the reveal
    return () => clearTimeout(timer)
  }, [go])

  useEffect(() => {
    if (!leaving) return
    const t = setTimeout(() => dispatch(finishIntro()), 1150)
    return () => clearTimeout(t)
  }, [leaving, dispatch])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className={`intro ${leaving ? 'leave' : ''}`} role="dialog" aria-label="Vidéo d’introduction de Eter Chemsousse Parfum">
      <div className="intro-frame">
        <video ref={ref} className="intro-video" src={src} poster={poster}
          muted playsInline autoPlay preload="auto" onEnded={go}
          onTimeUpdate={(e) => { const t = e.target.currentTime; setPct((t / CLIP) * 100); if (t >= SWITCH_AT) go() }} />
        <div className="intro-vignette" aria-hidden="true" />
        <button className="intro-btn intro-skip" onClick={go}>Passer</button>
        <div className="intro-bar" aria-hidden="true"><span style={{ width: pct + '%' }} /></div>
      </div>
    </div>
  )
}
