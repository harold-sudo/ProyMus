export function initHeroSlider() {
    const heroSlides = document.querySelectorAll(".hero-slider .slide");

    if (heroSlides.length <= 1) {
        return;
    }

    let heroIndex = 0;

    const showHeroSlide = (index) => {
        heroSlides.forEach((slide) => slide.classList.remove("active"));
        heroSlides[index].classList.add("active");
    };

    setInterval(() => {
        heroIndex = (heroIndex + 1) % heroSlides.length;
        showHeroSlide(heroIndex);
    }, 5000);
}
