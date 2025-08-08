# Hans Photography Portfolio

A modern, mobile-friendly, and UX-centric personal photography portfolio website showcasing curated categories of photos with optimized image delivery. Includes an automated image build pipeline to generate low- and medium-resolution images for fast loading and a smooth lightbox experience.

---

## Project Overview

This repository contains:

- **Static website** built with clean, accessible HTML/CSS/JS.
- Responsive layout with auto light/dark theme and manual toggle.
- Category-based photo galleries with low-res thumbnails and medium-res lightbox images.
- Accessibility-focused lightbox with keyboard navigation and focus trap.
- Contact form markup with basic client-side validation.
- Automated Python image build script to generate web-optimized images.
- Example `robots.txt`, `404.html`, and `sitemap.xml` for SEO and user experience.

---

## Repo Structurefor better compression.
	•	Add watermarking functionality.

```markdown
/assets
/low_res/          # Generated low-res images (thumbnails/previews)
/medium_res/       # Generated medium-res images (lightbox)
/originals/        # Place high-res original images here (NOT committed to Git)
/scripts
script.js          # JavaScript for theme toggle, lightbox, lazy loading, and validation
/styles
styles.css         # Responsive, modern CSS with light/dark theme support
404.html             # Custom 404 error page
index.html           # Home page with gallery overview and navigation
contact.html         # Contact page with form markup
portfolio.html       # Portfolio page with categorized galleries
robots.txt           # Instructions for search engines
sitemap.xml          # Sitemap for SEO
image_build.py       # Python script to generate optimized images
requirements.txt     # Python dependencies for image_build.py
README.md            # This file
```

---

## Getting Started

### Prerequisites

- A modern web browser for viewing the static site.
- Python 3.7+ to run the image build script.
- `pip` for installing Python dependencies.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hans-photo-portfolio.git
cd hans-photo-portfolio
```

2. Install Python dependencies for the image processing:

```bash
pip install -r requirements.txt
```

3. Add your high-resolution images into `assets/originals/` (this folder should NOT be committed to Git to keep your originals private).
4. Run the image build script to generate optimized images:

```bash
python image_build.py
```

5. Open `index.html` in a browser to preview your portfolio locally.

#### Deployment

- Since the site is static, you can host it on GitHub Pages, Netlify, Render (static site), Vercel, or any static hosting service.
- Make sure to exclude the `assets/originals/` folder from deployment for privacy and size reasons.
- Use HTTPS for security and better SEO.
- If you use a contact form backend, update the form’s action attribute accordingly.

#### Features ####

- Responsive design: Works flawlessly on mobile, tablet, and desktop.
- Light/dark mode: Auto switch based on system preferences with manual toggle.
- Categorized galleries: Portraits, landscapes, travel, nature, weddings.
- Optimized images: Fast-loading thumbnails and medium-res lightbox images.
- Accessible lightbox: Keyboard navigable and focus-trapped modal.
- Contact form: Basic validation with extensible markup.
- SEO-friendly: Custom 404, sitemap, robots.txt included.
- Lazy loading: Images load as you scroll for performance boost.

### How to Add New Photos ###
1. Place your new high-res photos into `assets/originals/`.
2. Run `python image_build.py` again to generate updated low and medium-res images.
3. Update the HTML galleries if needed by adding `<img>` tags with the proper src and data-lightbox-src attributes pointing to `low_res/` and `medium_res/` images respectively.

### Customization ###

- Adjust styles in `/styles/styles.css` for branding or layout tweaks.
- Modify JS behavior in `/scripts/script.js` for enhanced interactivity.
- Extend the Python image build script for watermarking or additional formats (e.g., `WebP`).
- Add backend for contact form if desired (`Flask/Django/Node`, etc.).

⸻

### Development Tips ###

- Use a live server (VSCode Live Server or python `-m http.server`) to test locally with auto-refresh.
- Optimize images beforehand to keep repo size small.
- Commit only optimized images (`low_res` and `medium_res`), never originals.
- Keep your domain and hosting setup separate for flexibility (e.g., Cloudflare DNS + GitHub Pages).

⸻

License & Credits

© 2025 Hans — All rights reserved.

Inspired by best practices from leading photographers and web developers, focusing on usability, performance, and accessibility.

⸻

Contact

Questions? Feedback? Collaborations? Use the contact form on the site or open an issue here.

⸻

Happy shooting and coding! 📸💻