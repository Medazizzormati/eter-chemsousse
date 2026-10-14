import { site, products, families } from '../data/site'
export default function Parfums() {
  return (
    <section id="parfums" className="sec">
      <div className="wrap">
        <h2>Parfums</h2>
        <p className="lead">Une parfumerie pour {families.map((f) => f.toLowerCase()).join(', ')}. Quelques parfums mis en avant par la boutique.</p>
        <ul className="chips">{families.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="grid">
          {products.map((p) => (
            <article className="card prod" key={p.name}>
              <img src={p.img} alt={p.alt} loading="lazy" />
              <div className="card-body"><h3>{p.name}</h3></div>
            </article>
          ))}
        </div>
        <p className="fine note-menu">Prix et disponibilité : contactez la boutique au <a href={`tel:${site.tel}`}>{site.phone}</a> ou sur Instagram <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>.</p>
      </div>
    </section>
  )
}
