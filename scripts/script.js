import { initBackToTop } from "./modules/backToTop.js";
import { initCatalogFilter } from "./modules/catalogFilter.js";
import { initContactForm } from "./modules/contactForm.js";
import { initGeneroCarousel } from "./modules/generoCarousel.js";
import { initHeroSlider } from "./modules/heroSlider.js";
import { initMenu } from "./modules/menu.js";

document.addEventListener("DOMContentLoaded", () => {
	initMenu();
	initHeroSlider();
	initGeneroCarousel();
	initCatalogFilter();
	initContactForm();
	initBackToTop();
});
