# Northstar Studio

This workspace contains a minimal personal website with a blank home page and two blank child pages.

## Pages

- Home: `index.html`
- Publications: `publications/index.html`
- CV: `cv/index.html`

## Notes

- The site is written in plain HTML, CSS, and JavaScript so it can be published for free on any static host.
- The current setup uses page paths for Publications and CV. Real subdomains need DNS plus separate hosting targets.

## Open locally

Open `index.html` in a browser, or serve the folder with any static file server.

## Publish on GitHub

This workspace is ready for GitHub Pages.

1. Create a new GitHub repository.
2. Add the repository as a remote and push the `main` branch.
3. In GitHub, enable Pages using the Actions workflow already included in `.github/workflows/deploy.yml`.
4. After the first successful deployment, GitHub will provide the live site URL.

## Design choices

- Blank home page
- Publications and CV child pages are intentionally blank