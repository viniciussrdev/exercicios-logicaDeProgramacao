// Inicializa a variável totalCompra com valor 0
let totalCompra = 0;

// Função para limpar o carrinho
function limpar() {
    totalCompra = 0; // Reseta o valor total da compra
    document.getElementById('lista-produtos').innerHTML = ''; // Limpa a lista de produtos
    document.getElementById('valor-total').textContent = 'R$ 0'; // Reseta o valor total exibido
}

// Função para adicionar produto ao carrinho
function adicionar() {
    // Recupera o nome, valor e qtde do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // Nome do produto
    let valorUnitario = produto.split('R$')[1]; // Valor unitário do produto
    let quantidade = document.getElementById('quantidade').value; // Quantidade informada

    // Calcula o preço total do produto (subtotal)
    let preco = quantidade * valorUnitario;

    // Recupera o elemento HTML que lista os produtos no carrinho
    let carrinho = document.getElementById('lista-produtos');

    // Adiciona o produto no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
    </section>`;

    // Atualiza o valor total da compra
    totalCompra = totalCompra + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalCompra}`;

    // Reseta o campo de quantidade
    document.getElementById('quantidade').value = 0;
}

// Inicializa o carrinho limpo ao carregar a página
limpar();

