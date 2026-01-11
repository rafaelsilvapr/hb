document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const hero = document.getElementById('hero');
    const navbar = document.getElementById('navbar');

    // Scroll Reveal Intersection Observer function
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

    // Initialize site immediately
    revealItems();
    if (hero) hero.classList.add('active');
    if (mainContent) mainContent.classList.remove('hidden');
    if (navbar) navbar.classList.remove('hidden');

    // Navbar scroll logic
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('hidden');
            } else {
                navbar.classList.remove('scrolled');
            }
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
