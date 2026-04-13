const produto = [
  "Álbum Proof",
  "Lightstick oficial ARMY Bomb",
  "Camiseta oficial BTS com logo do grupo",
  "Boné Love Yourself",
  "Mochila BTS com patch dos integrantes",
  "Pôster oficial da turnê Map of the Soul",
  "Photocard set dos membros",
  "Pulseira BTS com pingente do logo",
  "Caderno temático Butter",
  "Capinha de celular personalizada com o nome do integrante favorito"
]

// valores dos produtos
const valores = [250.00, 400.00, 120.00, 100.00, 180.00, 50.00, 60.00, 40.00, 30.00, 50.00]

// quantidade no estoque dos produtos
const quantidade = [15, 30, 10, 27, 38, 43, 56, 98, 14, 9]

// avaliações dos produtos (de 1 a 5 estrelas)
const avaliacoes = [4.8, 5.0, 4.6, 4.4, 4.7, 4.3, 4.9, 4.5, 4.2, 4.6]

// Função para mostrar o estoque completo (produto, valor, quantidade e avaliação)
function mostrarEstoqueCompleto() {
  console.log("\n==============================")
  console.log("📦 ESTOQUE COMPLETO")
  console.log("==============================\n")

  for (let i = 0; i < produto.length; i++) {
    console.log(`🛍️  Produto: ${produto[i]}`)
    console.log(`💰  Preço: R$ ${valores[i].toFixed(2)}`)
    console.log(`📦  Quantidade: ${quantidade[i]} unidades`)
    console.log(`⭐  Avaliação: ${avaliacoes[i]} estrelas`)
    console.log("------------------------------------------")
  }
}

// Função para mostrar apenas as quantidades
function mostrarQuantidade() {
  console.log("\n==============================")
  console.log("📊 QUANTIDADE EM ESTOQUE")
  console.log("==============================\n")

  for (let i = 0; i < produto.length; i++) {
    console.log(`🛍️  ${produto[i]} → ${quantidade[i]} unidades`)
  }
  console.log("------------------------------------------")
}

// Função para adicionar produto
function adicionarProduto(nomeProduto, valorProduto, qtdProduto, avaliacaoProduto) {
  produto.push(nomeProduto)
  valores.push(valorProduto)
  quantidade.push(qtdProduto)
  avaliacoes.push(avaliacaoProduto)

  console.log("\n✅ Produto adicionado com sucesso!")
  console.log("------------------------------------------")
  console.log(`🆕  Nome: ${nomeProduto}`)
  console.log(`💰  Valor: R$ ${valorProduto.toFixed(2)}`)
  console.log(`📦  Quantidade: ${qtdProduto} unidades`)
  console.log(`⭐  Avaliação: ${avaliacaoProduto} estrelas`)
  console.log("------------------------------------------")
}

// Remover o último produto
function removerUltimoProduto() {
  const removido = produto.pop()
  valores.pop()
  quantidade.pop()
  avaliacoes.pop()

  console.log("\n❌ Produto removido do estoque:")
  console.log("------------------------------------------")
  console.log(`🗑️  ${removido}`)
  console.log("------------------------------------------")
}

// Execução
mostrarEstoqueCompleto()
adicionarProduto("Moletom oficial BTS Permission to Dance", 200.00, 20, 4.9)
mostrarEstoqueCompleto()
removerUltimoProduto()
mostrarEstoqueCompleto()
