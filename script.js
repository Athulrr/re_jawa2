const arrow = document.querySelector('.arrow');
const bikePage = document.querySelector('.bike-page');

arrow.addEventListener('click', () => {
    bikePage.classList.add('slide-in');
    arrow.style.display = 'none';
});
