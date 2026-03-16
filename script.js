// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        section.scrollIntoView({behavior:'smooth'});
    });
});

// Typewriter effect for Home heading
const text = "Hi, I am Hafiz";
let i = 0;
const heading = document.getElementById("home-heading");
function typeWriter(){
    if(i < text.length){
        heading.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Scroll to Contact button
function scrollToContact(){
    document.getElementById("Contact").scrollIntoView({behavior:'smooth'});
}

// Skill badges click highlight
const skillBadges = document.querySelectorAll('.skill-badges span');
skillBadges.forEach(badge => {
    badge.addEventListener('click', function(){
        skillBadges.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});