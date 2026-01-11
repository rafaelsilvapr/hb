document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');
    const hero = document.getElementById('hero');
    const navbar = document.getElementById('navbar');

    if (!splash || !mainContent || !hero || !navbar) {
        console.error('Missing required elements in index.html');
        // Fallback: show main content if elements are missing
        if (mainContent) mainContent.classList.remove('hidden');
        if (navbar) navbar.classList.remove('hidden');
        if (splash) splash.classList.add('hidden');
        return;
    }

    // Splash Screen timeout
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            mainContent.classList.remove('hidden');
            navbar.classList.remove('hidden');

            // Trigger initial scroll reveals
            revealItems();
            hero.classList.add('active');
        }, 1000);
    }, 2500);

    // Scroll Reveal Intersection Observer
    const revealItems = () => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(reveal => observer.observe(reveal));
    };

    // Navbar scroll logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Simple parallax for hero image
        const scrolled = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `scale(1) translateY(${scrolled * 0.4}px)`;
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});
