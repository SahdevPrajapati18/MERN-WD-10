const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if (i >= images.length) index = 0;
  if (i < 0) index = images.length - 1;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 3000);