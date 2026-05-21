// Slideshow functionality
let currentSlide = 0;
const slides = [
  { src: '/Star-Wars/media/SW_E1.webp', alt: '1' },
  { src: '/Star-Wars/media/SW_E2.jpg', alt: '2' },
  { src: '/Star-Wars/media/SW_E3.jpg', alt: '3' },
  { src: '/Star-Wars/media/SW_E4.jpg', alt: '4' },
  { src: '/Star-Wars/media/SW_E5.jpg', alt: '5' },
  { src: '/Star-Wars/media/SW_E6.jpg', alt: '6' },
  { src: '/Star-Wars/media/SW_E7.jpg', alt: '7' },
  { src: '/Star-Wars/media/SW_E8.webp', alt: '8' },
  { src: '/Star-Wars/media/SW_E9.webp', alt: '9' }
];

function showSlide(n) {
  const slideImg = document.getElementById('slideshowImg');
  const slideText = document.getElementById('slidetext');
  const slideNumber = document.getElementById('slideNumber');
  
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;
  
  slideImg.src = slides[currentSlide].src;
  slideText.innerHTML = 'Episode ' + slides[currentSlide].alt;
  slideNumber.innerHTML = (currentSlide + 1) + ' / ' + slides.length;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);
});