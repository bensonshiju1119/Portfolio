# Benson Shiju — Cloud Platform Engineering

A responsive static portfolio built with HTML, CSS, and JavaScript. No package install or build step is required. The mountain cover photo, professional portrait, custom monogram, and downloadable resume are in `assets/`.

## Preview and check locally

From this project folder, start a local server:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. Check the desktop and mobile layouts, navigation links, both photos, LinkedIn and email links, and the Resume link. The resume should open the two-page PDF with **Benson K Shiju** as its title and author. Stop the server with `Ctrl+C`.

## Publish with GitHub Pages

1. Create a new repository on GitHub named `portfolio`. Leave **Add a README**, `.gitignore`, and license unchecked so the remote repository starts empty.
2. Open PowerShell in this folder and run these commands, replacing `YOUR-USERNAME` with your GitHub username:

   ```powershell
   git init
   git add .
   git commit -m "Add personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/(root)`, and save.
4. After GitHub Pages finishes publishing, the site address will be `https://YOUR-USERNAME.github.io/portfolio/`.

This is a plain static site, so GitHub Pages can serve it from the repository root without a compile step. Future changes can be published with `git add .`, `git commit -m "Update portfolio"`, and `git push`.

## Before publishing

GitHub Pages content is public. The site includes the resume PDF and contact details; review those files and links before pushing. GitHub's current publishing steps are in its [Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
