import { Link } from 'react-router-dom'
import Hero from './Hero'
import Reveal from './Reveal'
import Page from './Page'
import { site } from '../data/site'
const tiles = [
  ['La boutique', 'Une parfumerie à Khzema, Sousse.', '/boutique', '/assets/etageres1.jpg', 'Étagères de parfums éclairées'],
  ['Parfums', 'Femme, homme et bébé : quelques parfums à découvrir.', '/parfums', '/assets/prada-paradigme.jpg', 'Flacon vert Prada Paradigme'],
  ['Galerie', 'La boutique en images.', '/galerie', '/assets/flacon-or2.jpg', 'Flacon doré devant les étagères'],
  ['Contact', 'Adresse, téléphone et itinéraire.', '/contact', '/assets/devanture.jpg', 'Devanture de la boutique'],
]
export default function Home() {
  return (
    <Page>
      <Hero />
      <Reveal>
        <section className="sec">
          <div className="wrap">
            <h2>Bienvenue</h2>
            <p className="lead">Explorez la boutique, page après page.</p>
            <div className="tiles">
              {tiles.map(([t, d, to, img, alt]) => (
                <Link className="tile" to={to} key={to}>
                  <img src={img} alt={alt} loading="lazy" />
                  <div><h3>{t}</h3><p>{d}</p><span>Découvrir</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="band">
          <div className="wrap center">
            <h2>Venez nous voir</h2>
            <p className="hours sm">{site.address.join(', ')}</p>
            <p className="fine"><span lang="ar" dir="rtl">{site.addressAr}</span></p>
            <div className="actions">
              <a className="btn solid" href={`tel:${site.tel}`}>Appeler {site.phone}</a>
              <a className="btn" href={site.directions} target="_blank" rel="noopener noreferrer">Itinéraire Google Maps</a>
            </div>
          </div>
        </section>
      </Reveal>
    </Page>
  )
}
