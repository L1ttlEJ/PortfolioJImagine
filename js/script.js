document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("cvImage");
    const cvText = document.getElementById("cvText");
    const cvModal = document.getElementById("cvModal");

    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    // Gestion du menu burger
    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            document.getElementById('mobile-menu').classList.toggle('open');
            document.querySelector('.nav-list').classList.toggle('active');

        });
    }
    // Zoom sur l'image du CV
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

        // Ferme la modal quand on clique sur l’arrière-plan
        cvModal.addEventListener("click", () => {
            cvModal.style.display = "none";
        });

        // Évite la fermeture si on clique sur l'image elle-même
        const modalImg = cvModal.querySelector("img");
        if (modalImg) {
            modalImg.addEventListener("click", (event) => {
                event.stopPropagation();
            });
        }
    }
});
