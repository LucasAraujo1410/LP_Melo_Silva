document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel .item');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    let currentIndex = 0; // Índice do item visível

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calcula o deslocamento
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o primeiro item
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Vai para o último item
        }
        updateCarousel();
    });
});
