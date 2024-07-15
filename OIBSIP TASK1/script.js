// JavaScript for hero image slideshow
const heroImages = document.querySelectorAll('#hero .hero-slider img');
const slideInterval = 5000; // Interval between slides in milliseconds

let currentIndex = 0;

function nextSlide() {
    heroImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % heroImages.length;
    heroImages[currentIndex].classList.add('active');
}

// Initial setup
heroImages[currentIndex].classList.add('active');
setInterval(nextSlide, slideInterval);
