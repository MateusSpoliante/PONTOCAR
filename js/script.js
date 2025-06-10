document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("troca-texto");

  if (!texto) return; 

  const frases = [
    "Mecânica Geral",
    "Injeção Eletrônica",
    "Troca de Óleo",
    "Baterias",
    "Freios",
    "Alinhamento",
    "Balanceamento"
  ];

  let index = 0;

  setInterval(() => {
    texto.classList.remove("fade-in");
    texto.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % frases.length;
      texto.textContent = frases[index];
      texto.classList.remove("fade-out");
      texto.classList.add("fade-in");
    }, 500); // tempo do fade-out
  }, 3000); 
});
