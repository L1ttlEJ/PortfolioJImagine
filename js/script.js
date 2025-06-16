// JavaScript source code
document.addEventListener("DOMContentLoaded", function ()
{
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const img = document.getElementById("cvImage");
    const cvText = document.getElementById("cvText");
    const cvModal = document.getElementById("cvModal");

    // Gestion du menu burger
    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
            menuToggle.classList.toggle("open"); // Ajoute l'animation du burger si CSS le gère
        });
    }

    // Zoom sur l'image du CV
    if (img) {
        img.addEventListener("click", () => {
            img.classList.toggle("zoomed");
        });
    }

    // Affiche la modal quand on clique sur le texte
    cvText.addEventListener("click", () => {
        cvModal.style.display = "flex";
    });

    // Ferme la modal quand on clique sur l’arrière-plan
    cvModal.addEventListener("click", () => {
        cvModal.style.display = "none";
    });

    // Évite la fermeture si on clique sur l'image elle-même
    const modalImg = cvModal.querySelector("img");
    modalImg.addEventListener("click", (event) => {
        event.stopPropagation();
    });


});