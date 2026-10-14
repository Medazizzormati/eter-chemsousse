// Eter Chemsousse Parfum: single source of truth for content and links. Edit here.
// Phone 53 664 600 and the address are printed on the shop's video and Instagram bio.
// The phone 46 255 641 and the rating 4.8/5 (5 reviews) belong to another Google listing ("Tiba Fragrance"): not used.
const place = 'Eter Chemsousse Parfum, Rue des Palmiers, Khzema, Sousse, Tunisie'
export const site = {
  name: 'Eter Chemsousse Parfum',
  arabicName: 'عطر الشام',
  address: ['Rue des Palmiers', 'Khzema, Sousse'],
  addressAr: 'شارع النخيل، خزامة، سوسة',
  phone: '53 664 600',
  tel: '+21653664600',
  instagram: 'https://www.instagram.com/etrechemsousse/',
  instagramHandle: '@etrechemsousse',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(place),
}
export const nav = [['Accueil', '/'], ['La boutique', '/boutique'], ['Parfums', '/parfums'], ['Galerie', '/galerie'], ['Contact', '/contact']]
// Visuals published by the shop. Names are the ones shown on the visuals. No prices or availability: ask the shop.
export const products = [
  { name: 'Azzaro The Most Wanted', img: '/assets/azzaro-most-wanted.jpg', alt: 'Flacon Azzaro The Most Wanted sur un socle en marbre, entouré de vanille et de bois' },
  { name: 'Prada Paradigme', img: '/assets/prada-paradigme.jpg', alt: 'Flacon vert Prada Paradigme sur un socle en marbre, entouré de feuillages et de lavande' },
  { name: 'Gucci Guilty Black', img: '/assets/gucci-guilty-black.jpg', alt: 'Flacon Gucci Guilty Black sur un socle en marbre, entouré de fleurs blanches' },
  { name: 'Delina, Parfums de Marly', img: '/assets/delina-parfums-de-marly.jpg', alt: 'Flacon rose Delina de Parfums de Marly entouré de pivoines et de litchis' },
]
export const families = ['Femme', 'Homme', 'Bébé']
export const photos = [
  { src: '/assets/devanture.jpg', alt: 'Devanture de la boutique Eter Chemsousse Parfum' },
  { src: '/assets/etageres1.jpg', alt: 'Étagères éclairées remplies de flacons de parfum' },
  { src: '/assets/etageres2.jpg', alt: 'Rayons de parfums dans la boutique' },
  { src: '/assets/flacons3.jpg', alt: 'Trois flacons de parfum sur un comptoir en marbre sombre' },
  { src: '/assets/flacon-or.jpg', alt: 'Flacon doré gravé posé sur le comptoir' },
  { src: '/assets/flacon-or2.jpg', alt: 'Flacon doré aux motifs floraux devant les étagères' },
]
