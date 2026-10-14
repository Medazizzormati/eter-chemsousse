import { Link } from 'react-router-dom'
import { site, nav } from '../data/site'
import Logo from './Logo'
import { Instagram } from './Icons'
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap fgrid">
        <div><Logo /><p className="fine">{site.address.join(', ')}<br /><a href={`tel:${site.tel}`}>{site.phone}</a></p></div>
        <nav aria-label="Navigation du pied de page">{nav.map(([t, h]) => <Link key={h} to={h}>{t}</Link>)}</nav>
        <div className="fsoc"><a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Eter Chemsousse Parfum"><Instagram /></a></div>
      </div>
      <p className="copy-line">© {new Date().getFullYear()} Eter Chemsousse Parfum. Tous droits réservés.</p>
    </footer>
  )
}
