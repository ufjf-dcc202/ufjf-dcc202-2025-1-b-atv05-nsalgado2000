const eH1 = document.querySelector("h1");
eH1.textContent = "Olá, Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

for (let i = 0; i < 7; i++) {
  const eDisco = criaDisco();
  eTabuleiro.append(eDisco);
  if (i < 3) {
    eDisco.dataset.cor = "branco";
  }
 else if (i == 3) {
    eDisco.dataset.cor = "transparente";
  } else {
    eDisco.dataset.cor = "preto";
  }
}

function criaDisco() {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("disco");
  return novoDisco;
}

function criaTabuleiro() {
  const novoTabuleiro = document.createElement("div");
  novoTabuleiro.classList.add("tabuleiro");
  return novoTabuleiro;
}
