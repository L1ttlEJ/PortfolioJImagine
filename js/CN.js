document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Gestion du menu burger
    if (menuToggle && navList) {
        menuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });
    }

    // Gestion des onglets (tabs)
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // Filtrage de la galerie
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            galleryItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Animation d'apparition au scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => observer.observe(el));

    // Gestion de l'expansion des cards .bdfugue-card avec exclusivité
    const bdfugueCards = document.querySelectorAll('.bdfugue-card');

    bdfugueCards.forEach(card => {
        const closeBtn = card.querySelector('.close-btn');
        const fullContent = card.querySelector('.full-content');

        card.addEventListener('click', e => {
            if (e.target === closeBtn) return; // Ignore clic sur la croix

            // Si la carte est déjà ouverte, ne rien faire
            if (card.classList.contains('expanded')) return;

            // Agrandir la carte cliquée
            card.classList.add('expanded');
            if (fullContent) fullContent.classList.remove('d-none');

            // Étendre la colonne parente
            const parentCol = card.closest('.col-md-6');
            if (parentCol) parentCol.classList.add('expanded-parent');

            // Masquer les autres cartes
            bdfugueCards.forEach(otherCard => {
                if (otherCard !== card) {
                    const otherCol = otherCard.closest('.col-md-6');
                    if (otherCol) otherCol.style.display = 'none';
                }
            });
        });

        closeBtn.addEventListener('click', e =>
        {
            e.stopPropagation();

            // Fermer la carte ouverte
            card.classList.remove('expanded');
            if (fullContent) fullContent.classList.add('d-none');

            // Réduire la colonne parente
            const parentCol = card.closest('.col-md-6');
            if (parentCol) parentCol.classList.remove('expanded-parent');

            // Réafficher toutes les cartes
            bdfugueCards.forEach(otherCard => {
                const otherCol = otherCard.closest('.col-md-6');
                if (otherCol) otherCol.style.display = '';
            });
        });

        const modalImage = document.getElementById('modalImage');
        document.querySelectorAll('.img-clickable').forEach(img => {
            img.addEventListener('click', () => {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
            });
        });

    });
});
