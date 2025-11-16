# BOS Meubelstoffeerderij Website

Website voor BOS Meubelstoffeerderij - Een Angular applicatie met Tailwind CSS.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment naar GitHub Pages

De applicatie is geconfigureerd voor automatische deployment naar GitHub Pages via GitHub Actions.

### Stappen voor eerste deployment:

1. **Push je code naar GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activeer GitHub Pages in je repository:**
   - Ga naar je GitHub repository
   - Klik op **Settings** → **Pages**
   - Onder **Source**, selecteer **GitHub Actions**
   - Sla op

3. **De workflow wordt automatisch uitgevoerd:**
   - Bij elke push naar `main` of `master` branch wordt automatisch gebouwd en gedeployed
   - Je kunt ook handmatig deployen via **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

4. **Je website is beschikbaar op:**
   - `https://[jouw-username].github.io/[repository-naam]/`
   - Of als je een custom domain hebt ingesteld, op dat domein

### Belangrijke notities:

- De `404.html` file in de `public` folder zorgt ervoor dat Angular routing werkt op GitHub Pages
- De base href is ingesteld op `/` - als je repository naam niet de root is, pas dan de `baseHref` aan in `angular.json` en `package.json`
- De build output wordt automatisch naar de `gh-pages` branch gepusht

### Handmatig deployen:

```bash
npm run build:gh-pages
```

## Technologieën

- Angular 18
- Tailwind CSS
- Font Awesome 5.14
- TypeScript
