# Starlane website

Static website. No build step or package installation is needed.

- Home: `index.html`
- General website and games privacy policy: `privacy.html`
- Contact: zucomiceb522@gmail.com
- Copyright: Starlane

Keep `assets/`, `style.css`, `app.js`, and `favicon.svg` alongside the HTML files. All asset paths are relative and work on GitHub Pages. Fonts are local system fonts; no external font requests or analytics scripts are included.

Preview: run `python3 -m http.server 8765` in this directory and open http://localhost:8765/.

GitHub Pages: publish the repository root from the main branch. Expected privacy URL (unless a custom domain is configured): https://joystarlane.github.io/privacy.html

The policy describes services currently integrated in the game SDK. Review it whenever a game's data practices or providers change, and keep store Data safety declarations consistent with the shipped build.
