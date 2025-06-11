// Seleciona elementos
const botaoAbrir = document.getElementById('btSobreNos');
const popup = document.getElementById('popupSobreNos');
const botaoFechar = document.getElementById('btnFechar');

// Função para abrir popup
botaoAbrir.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Função para fechar popup
botaoFechar.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar popup clicando fora da caixa de conteúdo
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
