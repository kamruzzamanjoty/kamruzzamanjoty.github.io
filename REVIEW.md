# Website release review

## Proposed publication

A personal research and engineering portfolio for Kamruzzaman Joty, Ph.D. candidate in Mechanical Engineering at Southern Methodist University.

The proposed public repository would contain all `.qmd` page text, styling, favicon, README, this review, and the build workflow. Rendered pages would be available on GitHub Pages. Repository creation, Pages configuration, and the initial public deployment were completed on October 11, 2026.

## Pages ready for content approval

- Home: research introduction, four project summaries, and engineering interests.
- Research: nanopore themes, research methods, and a general mention of ongoing α-hemolysin work.
- Four project pages: DNA origami, multilayer materials, fabrication instrumentation, and modeling/machine learning.
- Publications: one verified Analytical Chemistry article (2024), with full authors, pages, and DOI.
- Engineering: research skills and coursework, described separately.
- Experience: supplied laboratory role and service activities, without invented dates.
- Writing: a short introductory explanation of nanopore measurement and hybrid pores.
- Professional profile: supplied role and skills; no unavailable CV downloads.
- Contact: affiliation, location, publisher-listed ORCID, and the existing Google Site.

## Material omitted

No private phone number, personal financial information, detailed patent material, unpublished numerical results, manuscript files, figures, or CV PDFs have been added. Specific individual contributions are not invented. Additional publication claims remain omitted pending verification.

## Verification

Quarto 1.10.19 renders all 12 pages. The final link checker verifies local page links, asset references, and fragment targets, and checks for unfinished starter labels. No stylesheet parsing warnings remain after moving ordinary CSS rules out of the SCSS analysis path.

The live homepage was visually checked in a desktop browser. Navigation to Publications and search for DNA origami were verified. The homepage has one H1 and no horizontal overflow at the inspected viewport. Mobile visual appearance has not been directly verified.

The GitHub workflow was executed successfully on GitHub. It builds on pushes and pull requests and publishes only on a manual run with the approval input enabled. GitHub account identity and repository ownership were verified as kamruzzamanjoty. Pages is configured for GitHub Actions; both build and deploy jobs succeeded in run 38182835204. The live default-domain site was checked. No custom domain was configured.

## Sources checked

- Original supplied Quarto project for research and experience descriptions.
- https://pubs.acs.org/doi/10.1021/acs.analchem.4c02016 for article metadata and the listed ORCID.
- https://quarto.org/docs/download/index.html for the Quarto release.
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages for the deployment workflow.

## Approval requested

The owner approved publishing this version, creating the public kamruzzamanjoty/kamruzzamanjoty.github.io repository, and enabling GitHub Pages on October 11, 2026. The owner also approved browser fallback, which was used for repository creation, Pages configuration, and manual workflow dispatch. The new repository did not overwrite an existing website.
