let currentSlide = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalSlides = images.length;
const intervalTime = 3000;

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('active');
}

setInterval(goToNextSlide, intervalTime);

document.querySelector('.carousel-button.next').addEventListener('click', goToNextSlide);
document.querySelector('.carousel-button.prev').addEventListener('click', goToPreviousSlide);
