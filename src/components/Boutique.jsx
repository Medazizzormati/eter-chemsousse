export default function Boutique() {
  return (
    <section id="boutique" className="sec">
      <div className="wrap split">
        <div className="copy">
          <h2>La boutique</h2>
          <p className="lead">Eter Chemsousse Parfum, en arabe <span lang="ar" dir="rtl">عطر الشام</span>, est une parfumerie située Rue des Palmiers, à Khzema, Sousse.</p>
          <p>En vitrine comme à l’intérieur, la boutique met ses flacons en scène : des étagères éclairées du sol au plafond, un comptoir en marbre sombre et des flacons dorés.</p>
          <ul className="chips"><li>Parfumerie</li><li>Femme</li><li>Homme</li><li>Bébé</li><li>Khzema · Sousse</li></ul>
        </div>
        <img className="photo tall" src="/assets/etageres2.jpg" alt="Étagères éclairées remplies de flacons de parfum" loading="lazy" />
      </div>
    </section>
  )
}
