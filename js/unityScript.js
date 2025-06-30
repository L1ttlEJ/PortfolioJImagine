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

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
        });
    });

    document.querySelector('.lightbox .close').addEventListener('click', () => {
        document.getElementById('lightbox').classList.add('hidden');
    });

    const btn = document.getElementById('toggle-btn');
    const gallery = document.getElementById('collapsible-gallery');

    btn.addEventListener('click', () => {
        gallery.classList.toggle('expanded');
        btn.innerHTML = gallery.classList.contains('expanded') ? ' Voir moins' : ' Voir plus';
    });

    //ou_tils méchanismes
    const btnOutils = document.getElementById('btn-outils');
    const btnMechanismes = document.getElementById('btn-mechanismes');
    const outilsSection = document.getElementById('outils-section');
    const mechanismesSection = document.getElementById('mechanismes-section');

    btnOutils.addEventListener('click', () => {
        outilsSection.style.display = 'block';
        mechanismesSection.style.display = 'none';
        btnOutils.classList.replace('btn-outline-primary', 'btn-primary');
        btnMechanismes.classList.replace('btn-primary', 'btn-outline-primary');
    });

    btnMechanismes.addEventListener('click', () => {
        outilsSection.style.display = 'none';
        mechanismesSection.style.display = 'block';
        btnMechanismes.classList.replace('btn-outline-primary', 'btn-primary');
        btnOutils.classList.replace('btn-primary', 'btn-outline-primary');
    });




});
