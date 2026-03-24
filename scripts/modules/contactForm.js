export function initContactForm() {
    const contactForm = document.querySelector("#contact-form");
    const feedback = document.querySelector("#form-feedback");

    if (!contactForm || !feedback) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const requiredFields = contactForm.querySelectorAll(
            "input[required], select[required], textarea[required]"
        );
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
