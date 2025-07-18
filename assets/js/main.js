// assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------------------------------
    // LightGallery Initialization
    // -----------------------------------------------------
    // This targets any element with the ID 'lightgallery' (e.g., on your gallery pages).
    // Ensure you have included lightgallery.min.js, lg-thumbnail.min.js, and lg-zoom.min.js in your HTML.
    const galleryContainer = document.getElementById('lightgallery');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            plugins: [lgThumbnail, lgZoom], // Enable thumbnail and zoom plugins
            speed: 500,                    // Transition speed in milliseconds
            download: false,               // Disable the download button for images
            licenseKey: 'YOUR_LICENSE_KEY' // Optional: If you have a LightGallery license
            // Add more options as needed (e.g., selector, loop, counter)
        });
    }

    // -----------------------------------------------------
    // Header Scroll Effect (Example)
    // -----------------------------------------------------
    // Adds a 'scrolled' class to the header when the user scrolls down,
    // allowing you to style it differently (e.g., add a shadow, change background).
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) { // Adjust threshold (in pixels) as needed
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // You can add more site-wide JavaScript functionalities here.
    // Examples:
    // - Simple form validation (if using a third-party form service)
    // - Lazy loading fallback (though native loading="lazy" is often sufficient)
    // - Burger menu toggle for mobile navigation (if not using pure CSS)
});

// Example for a potential burger menu toggle (requires corresponding HTML and CSS)
// Uncomment and add HTML/CSS if you implement a mobile menu
/*
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active'); // Toggle a class to show/hide menu
            menuToggle.classList.toggle('active'); // Animate the burger icon
        });
    }
});
*/