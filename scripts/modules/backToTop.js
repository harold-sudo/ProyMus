export function initBackToTop() {
    const backToTopButton = document.querySelector(".back-to-top");

    if (!backToTopButton) {
        return;
    }

    const toggleBackToTop = () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    };

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
