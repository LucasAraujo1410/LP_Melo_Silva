// Seleciona os elementos necessários
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel .item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Índice inicial do carrossel
let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const itemWidth = items[0].offsetWidth; // Largura de um item
    const newTranslateX = -currentIndex * itemWidth; // Calcula a nova posição
    carousel.style.transform = `translateX(${newTranslateX}px)`; // Move o carrossel
}

// Event listener para o botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

// Event listener para o botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Configurações iniciais do carrossel
window.addEventListener('resize', updateCarousel); // Garante que o carrossel responda a mudanças no tamanho da tela
updateCarousel(); // Inicializa a posição do carrossel
