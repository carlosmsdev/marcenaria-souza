const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        if (href === "#") {
            return;
        }

        const destino = document.querySelector(href);

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


const menuButton = document.querySelector("#menu-button");

const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.12

});

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


const comparisonRange = document.querySelector("#comparison-range");

const comparisonAfter = document.querySelector(".comparison-after");

const comparisonLine = document.querySelector(".comparison-line");

if (comparisonRange && comparisonAfter && comparisonLine) {

    comparisonRange.addEventListener("input", () => {

        const value = comparisonRange.value;

        comparisonAfter.style.width = `${value}%`;

        comparisonLine.style.left = `${value}%`;

    });

}


const reviews = document.querySelectorAll(".review");

const reviewPrevious = document.querySelector("#review-prev");

const reviewNext = document.querySelector("#review-next");

const reviewNumber = document.querySelector("#review-number");

let currentReview = 0;

function showReview(index) {

    reviews.forEach((review) => {

        review.classList.remove("active");

    });

    reviews[index].classList.add("active");

    if (reviewNumber) {

        const atual = String(index + 1).padStart(2, "0");

        const total = String(reviews.length).padStart(2, "0");

        reviewNumber.textContent = `${atual} / ${total}`;

    }

}

if (reviewPrevious && reviewNext && reviews.length > 0) {

    reviewPrevious.addEventListener("click", () => {

        currentReview--;

        if (currentReview < 0) {

            currentReview = reviews.length - 1;

        }

        showReview(currentReview);

    });

    reviewNext.addEventListener("click", () => {

        currentReview++;

        if (currentReview >= reviews.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    });

}


const budgetForm = document.querySelector("#budget-form");

if (budgetForm) {

    budgetForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        const city = document.querySelector("#city").value;

        const projectType = document.querySelector("#project-type").value;

        const measures = document.querySelector("#measures").value;

        const description = document.querySelector("#description").value;

        const photo = document.querySelector("#photo");

        let photoMessage = "Não possuo foto de referência.";

        if (photo.files.length > 0) {

            photoMessage = "Possuo uma foto de referência e vou enviar nesta conversa.";

        }

        const message = `
Olá! Gostaria de solicitar um orçamento na Marcenaria Souza.

Nome: ${name}
Cidade: ${city}
Tipo de projeto: ${projectType}
Medidas aproximadas: ${measures || "Não informado"}

Descrição:
${description}

${photoMessage}
        `;

        const whatsappNumber = "5500000000000";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

    });

}


const processSection = document.querySelector(".process");

const processProgress = document.querySelector(".process-line-progress");

if (processSection && processProgress) {

    window.addEventListener("scroll", () => {

        const sectionTop = processSection.offsetTop;

        const sectionHeight = processSection.offsetHeight;

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.65;

        let progress =
            ((scrollPosition - sectionTop) / sectionHeight) * 100;

        if (progress < 0) {
            progress = 0;
        }

        if (progress > 100) {
            progress = 100;
        }

        processProgress.style.height = `${progress}%`;

    });

}


const galleryImages =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const lightboxClose =
    document.querySelector(".lightbox-close");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        if (lightbox && lightboxImage) {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        }

    });

});

if (lightboxClose) {

    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}