# Kamruzzaman Joty | Research website

Editable Quarto source and a rendered review copy are included. Nothing in this package has been deployed. Open `_site/index.html` after extracting the ZIP to browse the local review copy. Quarto search and some browser features work best through `quarto preview` rather than file URLs.

## Local use

Install Quarto 1.10.19 (https://quarto.org/docs/download/), then run from this directory:

```sh
quarto preview
```

To rebuild and verify local links:

```sh
quarto render
python3 scripts/check_site.py _site
```

The GitHub Actions workflow uses the same Quarto version. Styling is split between SCSS theme variables and ordinary CSS to avoid a Quarto SCSS-analysis warning.

## GitHub Pages deployment

Account changes and publication require the owner's approval. No GitHub identity or repository has been assumed.

After approval and authenticated account verification:

1. Check whether an existing website repository already exists. Do not overwrite one without explicit permission.
2. Create the approved public repository, normally `<username>.github.io` for a root personal website, or use the approved existing repository.
3. Commit the project source to `main`, including `.github/workflows/publish.yml`. Do not commit `_site`, `.quarto`, or a generated `_quarto-pages.yml`.
4. In repository Settings → Pages, select **GitHub Actions** as the source.
5. Restrict the `github-pages` environment to approved publishing branches if appropriate.
6. Run **Build and publish Quarto website** through Actions → Run workflow, with the publication approval input checked.
7. Confirm successful build and deployment, then verify the returned live URL.

Pushes and pull requests build and validate; they do not deploy. Only an explicit manual workflow run with publication approved deploys. The workflow reads Pages metadata and generates the canonical site URL, supporting both root and project repositories.

## Content maintenance

Pages are in `.qmd` files; project pages are in `projects/`. Navigation is configured in `_quarto.yml`. Editing source requires a fresh render. The rendered `_site` directory is a review snapshot, not the source.

Current CV/resume PDFs, a professional email, and further verified publications can be added after review. The profile page does not provide missing download links. Research figures and unpublished numerical results are not included.

See `REVIEW.md` for the prepared public content and outstanding release steps.
