import { Link } from 'react-router-dom'
// Logo from the shop's own video (end card), cropped and unmodified: public/assets/logo.jpg
export default function Logo({ onClick }) {
  return (
    <Link className="logo" to="/" onClick={onClick} aria-label="Eter Chemsousse Parfum, accueil">
      <img className="logo-img" src="/assets/logo.jpg" alt="" width="46" height="46" />
      <span className="logo-text">
        <span className="logo-name">Eter Chemsousse</span>
        <span className="logo-tag">Parfum · Sousse</span>
      </span>
    </Link>
  )
}
