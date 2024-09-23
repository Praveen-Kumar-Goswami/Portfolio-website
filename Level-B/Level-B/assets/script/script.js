
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function animateProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateProjects);

window.addEventListener('load', animateProjects);

