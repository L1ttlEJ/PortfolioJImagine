document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    // Gestion du menu burger
    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
            menuToggle.classList.toggle("open"); // Ajoute l'animation du burger si CSS le gère
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            // Gérer l'état actif du bouton
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Afficher la bonne section
            contents.forEach(content => {
                if (content.id === tab) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
});
