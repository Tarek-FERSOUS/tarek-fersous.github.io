// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('button.md\\:hidden');
const navLinks = document.querySelector('nav.hidden');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-16');
    navLinks.classList.toggle('right-6');
    navLinks.classList.toggle('mr-6'); /* Added margin to the right */
    navLinks.classList.toggle('bg-darker');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('rounded-lg');
    navLinks.classList.toggle('shadow-lg');
    navLinks.classList.toggle('space-y-4');
    navLinks.classList.toggle('space-x-8');
});

// Animation for skill pills on hover
const skillPills = document.querySelectorAll('.skill-pill');
skillPills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
        pill.classList.add('transform', 'scale-105');
    });
    pill.addEventListener('mouseleave', () => {
        pill.classList.remove('transform', 'scale-105');
    });
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-shrink');
    } else {
        header.classList.remove('header-shrink');
    }
});