const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-shrink');
    } else {
        header.classList.remove('header-shrink');
    }    
});    









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






emailjs.init(woXTXHqSkqNXSOxO1); // Replace "YOUR_USER_ID" with your EmailJS user ID
// Form submission handling
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Send the email using EmailJS
        emailjs.send("service_ygglxqk","template_n76ezwh",{
            name: name,
            email: email,
            subject: subject,
            message: message,
        }).then(
            (response) => {
                alert("Message sent successfully!");
                contactForm.reset(); // Clear the form
            },
            (error) => {
                alert("Failed to send the message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
    });
}