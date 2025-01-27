document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel .item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    // Atualiza a posição do carrossel
    const updateCarouselPosition = () => {
        const translateX = -currentIndex * 100; // Move 100% para o próximo item
        carousel.style.transform = `translateX(${translateX}%)`;
    };

    // Evento para o botão "anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarouselPosition();
    });

    // Evento para o botão "próximo"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarouselPosition();
    });

    // Inicia o carrossel automaticamente (opcional)
    let autoSlide = setInterval(() => {
        nextButton.click();
    }, 5000); // Altere o tempo conforme necessário (5000ms = 5 segundos)

    // Pausa o carrossel ao interagir com os botões
    prevButton.addEventListener('mouseenter', () => clearInterval(autoSlide));
    nextButton.addEventListener('mouseenter', () => clearInterval(autoSlide));
    prevButton.addEventListener('mouseleave', () => autoSlide = setInterval(() => nextButton.click(), 5000));
    nextButton.addEventListener('mouseleave', () => autoSlide = setInterval(() => nextButton.click(), 5000));
});
