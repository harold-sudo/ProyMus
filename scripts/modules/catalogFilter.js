export function initCatalogFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const catalogCards = document.querySelectorAll(".catalog-card");

    if (filterButtons.length === 0 || catalogCards.length === 0) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            catalogCards.forEach((card) => {
                const match = filter === "all" || card.dataset.category === filter;
                card.style.display = match ? "flex" : "none";
            });
        });
    });
}
