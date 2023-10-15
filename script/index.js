const idTabela = "tabela-produtos";
const produtos = [
  {
    qtde: 1,
    produto: "Arroz",
    valor: 5.5,
  },
];

function limparTabela() {
  while (document.getElementById(idTabela).hasChildNodes()) {
    document
      .getElementById(idTabela)
      .removeChild(document.getElementById(idTabela).firstChild);
  }
}

function adicionarProdutoNaLista() {
  const quantidade = 1;
  const produto = "teste";
  const precoUnitario = 1.99;

  limparTabela();
  adicionarCabecalho();

  produtos.push({
    qtde: quantidade,
    produto: produto,
    valor: precoUnitario,
  });
  reRenderTest();
}

function adicionarCabecalho() {
  const tabela = document.getElementById(idTabela);
  const cabecalho = document.createElement("tr");

  const cabecalhoQuantidade = document.createElement("th");
  cabecalhoQuantidade.textContent = "Qtd";
  cabecalho.appendChild(cabecalhoQuantidade);

  const produto = document.createElement("th");
  produto.textContent = "Produto";
  produto.className = "campo-produto";
  cabecalho.appendChild(produto);

  const precoUnitario = document.createElement("th");
  precoUnitario.textContent = "Preço";
  cabecalho.appendChild(precoUnitario);

  const acoes = document.createElement("th");
  acoes.textContent = "Ações";
  cabecalho.appendChild(acoes);

  tabela.appendChild(cabecalho);
}

function reRenderTest() {
  const tabela = document.getElementById(idTabela);
  // tabela.setInnerHTML = "";

  produtos.forEach((produto) => {
    const novaLinha = document.createElement("tr");

    // quantidade
    const campoQtde = document.createElement("td");
    campoQtde.innerHTML = produto.qtde;
    novaLinha.appendChild(campoQtde);

    // produto
    const campoProduto = document.createElement("td");
    campoProduto.innerHTML = produto.produto;
    campoProduto.classList.add("campo-produto");
    novaLinha.appendChild(campoProduto);

    // valor
    const campoValor = document.createElement("td");
    campoValor.innerHTML = `R$ ${produto.valor}`;
    novaLinha.appendChild(campoValor);

    // ações
    const campoAcoes = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";
    botaoExcluir.onclick = () => console.log("Excluir item");
    campoAcoes.appendChild(botaoExcluir);

    novaLinha.appendChild(campoAcoes);
    tabela.appendChild(novaLinha);
  });
}

function adicionarProduto() {
  const tabela = document.getElementById(idTabela);

  const novaLinha = document.createElement("tr");
  const campoQtde = document.createElement("td");
  campoQtde.innerHTML = 42;
  novaLinha.appendChild(campoQtde);

  const campoProduto = document.createElement("td");
  campoProduto.innerHTML = "Produto exemplo";
  campoProduto.classList.add("campo-produto");
  novaLinha.appendChild(campoProduto);

  const campoValor = document.createElement("td");
  campoValor.innerHTML = "R$ 5.50";
  novaLinha.appendChild(campoValor);

  const campoAcoes = document.createElement("td");
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerHTML = "Excluir";
  botaoExcluir.onclick = () => console.log("Excluir item");
  campoAcoes.appendChild(botaoExcluir);
  novaLinha.appendChild(campoAcoes);

  tabela.appendChild(novaLinha);
}

function excluirProduto(event) {
  console.log("Excluir item", event);
}
