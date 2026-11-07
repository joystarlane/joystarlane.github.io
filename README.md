# Starlane website

Static website. No build step or package installation is needed.

- Home: `index.html`
- General website and games privacy policy: `privacy.html`
- General website and games terms of use: `terms.html`
- Contact: zucomiceb522@gmail.com
- Copyright: Starlane

Keep `assets/`, `style.css`, `app.js`, and `favicon.svg` alongside the HTML files. All asset paths are relative and work on GitHub Pages. Fonts are local system fonts; no external font requests or analytics scripts are included.

Preview: run `python3 -m http.server 8765` in this directory and open http://localhost:8765/.

GitHub Pages: publish the repository root from the main branch. Expected privacy URL (unless a custom domain is configured): https://joystarlane.github.io/privacy.html

The policy describes services currently integrated in the game SDK. Review it whenever a game's data practices or providers change, and keep store Data safety declarations consistent with the shipped build.

Terms URL: https://joystarlane.github.io/terms.html

Keep the terms consistent with the actual game features, purchase descriptions and store policies. Publishing the page does not implement in-game notice or acceptance.

The language menu follows the game's 12 supported languages. Use `?lang=ja`, for example, to share a localized page; `?lang=en` opens the full English text. The homepage and controls are localized, and the privacy and terms pages offer localized reading guides alongside their complete English originals. The browser's language is used when no explicit language is selected. Language preferences are not written to storage.
