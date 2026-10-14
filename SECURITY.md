# Sécurité

- CSP stricte (ressources uniquement depuis le site), anti-clickjacking, HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP : `public/_headers` (Netlify, Cloudflare Pages), `vercel.json`, `deploy/nginx.conf`. Une CSP est aussi injectée dans la page au build.
- Polices auto-hébergées, pas de source maps, `console` et `debugger` retirés du build, liens externes en `noopener noreferrer`, aucun HTML injecté.
- Site statique : pas de serveur applicatif, pas de base de données, pas de secrets.
- Avant la mise en ligne : HTTPS obligatoire, `npm audit --omit=dev`, dépendances à jour (Dependabot).
- Le code d'un site web reste visible dans le navigateur ; ne mettez jamais de secret dans le code.
