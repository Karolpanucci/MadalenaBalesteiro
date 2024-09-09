let currentSlide = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalSlides = images.length;
const intervalTime = 3000; // Tempo em milissegundos entre as transições, 3000ms = 3s

// Função para avançar o slide
function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para voltar ao slide anterior
function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Configurar intervalo automático
setInterval(goToNextSlide, intervalTime);

// Adicionar eventos para os botões de navegação
document.querySelector('.carousel-button.next').addEventListener('click', goToNextSlide);
document.querySelector('.carousel-button.prev').addEventListener('click', goToPreviousSlide);



  function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

