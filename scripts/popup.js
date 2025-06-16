const botaoAbrir = document.getElementById('btSobreNos');
const popup = document.getElementById('popupSobreNos');
const botaoFechar = document.getElementById('btnFechar');

botaoAbrir.addEventListener('click', () => {
    popup.classList.add('ativo');
});

botaoFechar.addEventListener('click', () => {
    popup.classList.remove('ativo');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('ativo');
    }
});
