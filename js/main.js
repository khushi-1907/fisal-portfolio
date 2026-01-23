document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Sticky header shadow on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Navbar with Dynamic Sliding Line Logic
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.getElementById('nav-indicator');

    function updateActiveLink() {
        let current = '';

        // Find current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // Trigger when 1/3 of the screen down
            if (window.scrollY >= (sectionTop - window.innerHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Update active class and move indicator
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                moveIndicator(link);
            }
        });

        // Hide indicator if no section is active (e.g. at very top)
        if (!current) {
            indicator.style.opacity = '0';
        }
    }

    function moveIndicator(element) {
        indicator.style.opacity = '1';
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);

    // Theme toggle with smooth transition
    const toggleBtn = document.getElementById('theme-toggle');

    function setTheme(theme) {
        // Add transitioning class for smooth animation
        document.documentElement.classList.add('theme-transitioning');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Remove transitioning class after animation completes
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 400);

        localStorage.setItem('theme', theme);
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // Use saved preference
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } else if (prefersDark) {
        // Use system preference if no saved theme
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        // Default to light mode
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Initial check
    setTimeout(updateActiveLink, 100);
});