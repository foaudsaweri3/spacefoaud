document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust the offset as needed
                behavior: 'smooth'
            });
        });
    }

    // Reveal sections on scroll
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + window.innerHeight;
        for (const section of sections) {
            if (section.offsetTop < scrollPos - 100) {
                section.classList.add('visible');
            }
        }
    });
});
