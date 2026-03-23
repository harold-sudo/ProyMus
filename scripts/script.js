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

	const filterButtons = document.querySelectorAll(".filter-btn");
	const catalogCards = document.querySelectorAll(".catalog-card");

	if (filterButtons.length > 0 && catalogCards.length > 0) {
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

	const contactForm = document.querySelector("#contact-form");
	const feedback = document.querySelector("#form-feedback");

	if (contactForm && feedback) {
		contactForm.addEventListener("submit", (event) => {
			event.preventDefault();

			const requiredFields = contactForm.querySelectorAll("input[required], select[required], textarea[required]");
			let isValid = true;

			requiredFields.forEach((field) => {
				field.classList.remove("is-invalid");
				if (!field.checkValidity()) {
					isValid = false;
					field.classList.add("is-invalid");
				}
			});

			if (!isValid) {
				feedback.textContent = "Por favor revisa los campos marcados antes de enviar.";
				feedback.classList.remove("success");
				feedback.classList.add("error");
				return;
			}

			feedback.textContent = "Mensaje enviado correctamente. Te contactaremos pronto.";
			feedback.classList.remove("error");
			feedback.classList.add("success");
			contactForm.reset();
		});
	}

	const backToTopButton = document.querySelector(".back-to-top");

	if (backToTopButton) {
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
});
