const idTabela = "tabela-produtos";
const produtos = [];

function limparTabela() {
  while (document.getElementById(idTabela).hasChildNodes()) {
    document
      .getElementById(idTabela)
      .removeChild(document.getElementById(idTabela).firstChild);
  }
}

function adicionarProdutoNaLista() {
  const produto = document.getElementById("produto").value;
  if (produto.trim().length === 0) {
    return;
  }

  limparTabela();
  adicionarCabecalho();

  const quantidade = Number(document.getElementById("qtde").value);
  const precoUnitario = Number(document.getElementById("valor-unitario").value);

  produtos.push({
    qtde: quantidade,
    produto: produto,
    valor: precoUnitario,
  });
  popularTabela();
  document.getElementById("qtde").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("valor-unitario").value = "";
  document.getElementById("qtde").focus();
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

function popularTabela() {
  const tabela = document.getElementById(idTabela);
  let quantidadeItens = 0;
  let precoTotal = 0;

  produtos.forEach((produto) => {
    const novaLinha = document.createElement("tr");

    // quantidade
    const campoQtde = document.createElement("td");
    campoQtde.innerHTML = produto.qtde;
    novaLinha.appendChild(campoQtde);
    quantidadeItens += Number(produto.qtde);

    // produto
    const campoProduto = document.createElement("td");
    campoProduto.innerHTML = produto.produto;
    campoProduto.classList.add("campo-produto");
    novaLinha.appendChild(campoProduto);

    // preço unitário
    const campoValorUnitario = document.createElement("td");
    campoValorUnitario.innerHTML = converterNumeroParaMoeda(produto.valor);
    novaLinha.appendChild(campoValorUnitario);

    // preço total
    const campoValorTotalItem = document.createElement("td");
    campoValorTotalItem.innerHTML = converterNumeroParaMoeda(
      produto.valor * produto.qtde
    );
    novaLinha.appendChild(campoValorTotalItem);
    precoTotal += Number(produto.valor * produto.qtde);

    // ações
    const campoAcoes = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir";
    botaoExcluir.onclick = () => console.log("Excluir item");
    campoAcoes.appendChild(botaoExcluir);

    novaLinha.appendChild(campoAcoes);
    tabela.appendChild(novaLinha);
  });

  document.getElementById("qtd-itens").innerHTML = quantidadeItens;
  document.getElementById("valor-total").innerHTML =
    converterNumeroParaMoeda(precoTotal);
}

function converterNumeroParaMoeda(numero) {
  return (
    Number(numero).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }) || "R$ 0,00"
  );
}

function excluirProduto(event) {
  console.log("Excluir item", event);
}
