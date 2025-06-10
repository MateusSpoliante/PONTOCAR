function carregarSecao(id, arquivo, callback) {
  fetch(arquivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error('Erro ao carregar ' + arquivo, err));
}

carregarSecao("home", "home.html", iniciarTrocaTexto);
carregarSecao("servicos", "servicos.html");
carregarSecao("contatos", "contatos.html");
carregarSecao("local", "local.html");
