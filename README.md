# han-photos
Photos

Example Architecture: 

yourusername.github.io/
├── index.html          (Your homepage)
├── about.html          (Your "About Me" page)
├── contact.html        (Your "Contact" page, if separate)
├── sitemap.xml         (Optional: for SEO, helps search engines index your site)
├── robots.txt          (Optional: for SEO, tells search engines which pages to crawl)
├── CNAME               (Optional: if using a custom domain)
├── README.md           (Information about your repository)
├── .gitignore          (Lists files/folders Git should ignore, like local drafts)
│
├── css/
│   └── style.css       (Main stylesheet for global styles)
│   └── lightgallery.css (If using a lightbox/gallery library like lightGallery)
│
├── js/
│   └── script.js       (Your custom JavaScript code)
│   └── lightgallery.min.js (If using a lightbox/gallery library)
│   └── lg-thumbnail.min.js (Lightbox plugin)
│   └── lg-zoom.min.js      (Lightbox plugin)
│
├── images/
│   ├── hero/            (Large, high-impact hero images for home/gallery pages)
│   │   └── homepage-hero.jpg
│   │   └── gallery-header.jpg
│   ├── social/          (Social media icons, profile picture)
│   │   └── instagram-icon.png
│   │   └── profile-pic.jpg
│   ├── favicon/         (Favicon files for different sizes)
│   │   ├── favicon.ico
│   │   └── android-chrome-192x192.png
│   ├── thumbnails/      (Small, optimized images for gallery grids/previews)
│   │   ├── landscape-thumb-01.jpg
│   │   ├── portrait-thumb-01.jpg
│   │   └── wedding-thumb-01.jpg
│   └── general/         (Other general website images, e.g., banners, logos)
│       └── logo.png
│
└── galleries/
    ├── landscapes/
    │   ├── index.html        (HTML page for the Landscapes gallery)
    │   ├── photo-01-large.jpg  (Large version for lightbox)
    │   ├── photo-01-thumb.jpg  (Thumbnail for grid)
    │   ├── photo-02-large.jpg
    │   └── photo-02-thumb.jpg
    │
    ├── portraits/
    │   ├── index.html        (HTML page for the Portraits gallery)
    │   ├── portrait-A-large.jpg
    │   └── portrait-A-thumb.jpg
    │
    └── weddings/
        ├── index.html        (HTML page for the Weddings gallery)
        ├── wedding-1-large.jpg
        └── wedding-1-thumb.jpg