document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const img = document.getElementById("cvImage");
    const cvText = document.getElementById("cvText");
    const cvModal = document.getElementById("cvModal");

    // Gestion du menu burger
    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
            menuToggle.classList.toggle("open"); // animation burger si CSS
        });
    }

    // Zoom sur l'image du CV (si pr�sente)
    if (img) {
        img.addEventListener("click", () => {
            img.classList.toggle("zoomed");
        });
    }

    // Affiche la modal quand on clique sur le texte
    if (cvText && cvModal) {
        cvText.addEventListener("click", () => {
            cvModal.style.display = "flex";
        });

        // Ferme la modal quand on clique sur l�arri�re-plan
        cvModal.addEventListener("click", () => {
            cvModal.style.display = "none";
        });

        // Emp�che la fermeture si on clique sur l�image elle-m�me
        const modalImg = cvModal.querySelector("img");
        if (modalImg) {
            modalImg.addEventListener("click", (event) => {
                event.stopPropagation();
            });
        }
    }

    // Apparition progressive des �l�ments avec la classe fade-in
    const fadeElems = document.querySelectorAll(".fade-in");
    fadeElems.forEach((el, index) => {
        // on ajoute un d�lai progressif en fonction de l'index (optionnel si tu veux un effet progressif par JS)
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        }, index * 500); // d�lai 0.5s entre chaque �l�ment
    });
});
