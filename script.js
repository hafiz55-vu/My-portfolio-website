// Typewriter Effect
const homeHeading = document.getElementById('home-heading');
const text = "Welcome to My Portfolio";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        homeHeading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Scroll to Contact
function scrollToContact() {
    const contactSection = document.getElementById('Contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll Reveal for Sections
const sections = document.querySelectorAll('section');

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionTop < screenHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Active Section Highlight
const navLinksArray = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});