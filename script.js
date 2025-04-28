// ---- Menú ----
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
// // ---- Carrusel de imágenes principal ----
// const slides = document.querySelectorAll('.hero-slider .slide');
// let currentSlide = 0;
// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove('active'));
//     slides[index].classList.add('active');
// }
// setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }, 7000);
// // ---- Carrusel de géneros ----
// const generoSlides = document.querySelectorAll('.generos-carrusel .genero-slide');
// const prevBtn = document.querySelector('.genero-prev');
// const nextBtn = document.querySelector('.genero-next');
// let currentGenero = 0;

// function showGenero(index) {
//     generoSlides.forEach(slide => slide.classList.remove('active'));
//     generoSlides[index].classList.add('active');
// }

// prevBtn.addEventListener('click', () => {
//     currentGenero = (currentGenero - 1 + generoSlides.length) % generoSlides.length;
//     showGenero(currentGenero);
// });

// nextBtn.addEventListener('click', () => {
//     currentGenero = (currentGenero + 1) % generoSlides.length;
//     showGenero(currentGenero);
// });