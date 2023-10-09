function adicionarProduto() {
  console.log("Adicionar item");
  const tabela = document.getElementById("tabela-produtos");

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
