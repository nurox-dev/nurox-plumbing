# GitHub Pages Deployment

This project is configured for deployment to GitHub Pages using Vite and GitHub Actions.

## Steps to Deploy

1. Make sure your repository is public on GitHub.
2. Ensure your `vite.config.ts` has the correct base:
   ```ts
   base: "/nurox-plumbing/",
   ```
3. The `package.json` should have:
   ```json
   "homepage": "https://nurox-dev.github.io/nurox-plumbing/",
   "private": false
   ```
4. The GitHub Actions workflow is set up in `.github/workflows/deploy.yml`.
5. To deploy, commit and push to the `master` branch:
   ```sh
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin master
   ```
6. Check the Actions tab on GitHub for deployment status.
7. Your site will be live at:
   https://nurox-dev.github.io/nurox-plumbing/

If you see a 404, check the workflow logs and GitHub Pages settings.
