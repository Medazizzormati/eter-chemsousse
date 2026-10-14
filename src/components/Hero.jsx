import { Link } from 'react-router-dom'
import { site } from '../data/site'
export default function Hero() {
  return (
    <div className="hero" id="accueil">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>Eter Chemsousse Parfum</h1>
          <p className="ar"><span lang="ar" dir="rtl">{site.arabicName}</span> · Sousse</p>
          <p className="desc">Parfumerie à Khzema, Sousse : parfums femme, homme et bébé, dans une boutique aux étagères éclairées.</p>
          <p className="meta">{site.address.join(', ')} · <a href={`tel:${site.tel}`}>{site.phone}</a></p>
          <div className="actions">
            <Link className="btn solid" to="/boutique">Découvrir la boutique</Link>
            <Link className="btn" to="/contact">Nous trouver</Link>
          </div>
        </div>
        <div className="hero-art">
          <img className="art-main" src="/assets/flacon-or.jpg" alt="Flacon doré gravé posé sur un comptoir en marbre sombre" fetchPriority="high" />
          <img className="art-small" src="/assets/flacons3.jpg" alt="Trois flacons de parfum sur le comptoir" />
        </div>
      </div>
    </div>
  )
}
