import { site } from '../data/site'
import { Instagram } from './Icons'
export default function Contact() {
  return (
    <section id="contact" className="sec tint">
      <div className="wrap">
        <h2>Contact et accès</h2>
        <div className="two">
          <div className="panel">
            <h3>Adresse</h3>
            <address>
              {site.address.map((l) => <span key={l}>{l}<br /></span>)}
              <span lang="ar" dir="rtl" className="ar-line">{site.addressAr}</span>
            </address>
            <div className="socials"><a className="btn solid" href={site.directions} target="_blank" rel="noopener noreferrer">Itinéraire Google Maps</a></div>
          </div>
          <div className="panel">
            <h3>Téléphone et Instagram</h3>
            <p className="hours sm"><a href={`tel:${site.tel}`}>{site.phone}</a></p>
            <div className="socials">
              <a className="btn solid" href={`tel:${site.tel}`}>Appeler</a>
              <a className="btn" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram /> {site.instagramHandle}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
