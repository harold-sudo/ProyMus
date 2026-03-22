document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.querySelector(".menu-toggle");
	const menu = document.querySelector("nav.menu");

	if (menuToggle && menu) {
		menuToggle.addEventListener("click", () => {
			menu.classList.toggle("show");
		});

		menu.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				menu.classList.remove("show");
			});
		});
	}

	const heroSlides = document.querySelectorAll(".hero-slider .slide");
	let heroIndex = 0;

	const showHeroSlide = (index) => {
		heroSlides.forEach((slide) => slide.classList.remove("active"));
		heroSlides[index].classList.add("active");
	};

	if (heroSlides.length > 1) {
		setInterval(() => {
			heroIndex = (heroIndex + 1) % heroSlides.length;
			showHeroSlide(heroIndex);
		}, 5000);
	}

	const generoSlides = document.querySelectorAll(".genero-slide");
	const prevBtn = document.querySelector(".genero-prev");
	const nextBtn = document.querySelector(".genero-next");
	let generoIndex = 0;

	const showGeneroSlide = (index) => {
		generoSlides.forEach((slide) => slide.classList.remove("active"));
		generoSlides[index].classList.add("active");
	};

	if (generoSlides.length > 0) {
		nextBtn?.addEventListener("click", () => {
			generoIndex = (generoIndex + 1) % generoSlides.length;
			showGeneroSlide(generoIndex);
		});

		prevBtn?.addEventListener("click", () => {
			generoIndex = (generoIndex - 1 + generoSlides.length) % generoSlides.length;
			showGeneroSlide(generoIndex);
		});
	}
});
