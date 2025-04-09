// Smooth scroll functionality for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth',
        });
    });
});
