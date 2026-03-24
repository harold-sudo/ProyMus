export function initGeneroCarousel() {
    const generoSlides = document.querySelectorAll(".genero-slide");
    const prevBtn = document.querySelector(".genero-prev");
    const nextBtn = document.querySelector(".genero-next");

    if (generoSlides.length === 0) {
        return;
    }

    let generoIndex = 0;

    const showGeneroSlide = (index) => {
        generoSlides.forEach((slide) => slide.classList.remove("active"));
        generoSlides[index].classList.add("active");
    };

    nextBtn?.addEventListener("click", () => {
        generoIndex = (generoIndex + 1) % generoSlides.length;
        showGeneroSlide(generoIndex);
    });

    prevBtn?.addEventListener("click", () => {
        generoIndex = (generoIndex - 1 + generoSlides.length) % generoSlides.length;
        showGeneroSlide(generoIndex);
    });
}
