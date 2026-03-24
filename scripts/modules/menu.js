export function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav.menu");

    if (!menuToggle || !menu) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
}
