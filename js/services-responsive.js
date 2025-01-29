// Lógica do Carrossel
let currentIndex = 0;
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});

// Inicializa o carrossel
showSlide(currentIndex);
