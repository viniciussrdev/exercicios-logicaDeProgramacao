// Função que realiza o sorteio dos números
function sortear() {
    // Captura os valores dos inputs e converte para inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    // Array para armazenar os números sorteados
    let sorteados = [];
    let numero;
    
    // Loop para gerar a quantidade de números sorteados
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório dentro do intervalo especificado
        numero = obterNumeroAleatorio(de, ate);
    
        // Verifica se o número já foi sorteado
        while (sorteados.includes(numero)) {
            // Se o número já foi sorteado, gera um novo número
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }
    
        // Adiciona o número ao array de sorteados
        sorteados.push(numero);
    }
    
    // Exibe os números sorteados na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    // Habilita o botão de reiniciar
    alterarStatusBotao();
}

// Função que gera um número aleatório entre os valores min e max (inclusive)
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que altera o estado do botão de reiniciar (habilita/desabilita)
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    // Verifica se o botão está desabilitado
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Remove a classe de desabilitado e adiciona a classe de habilitado
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Remove a classe de habilitado e adiciona a classe de desabilitado
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função que reinicia o formulário e limpa os resultados
function reiniciar() {
    // Limpa os valores dos inputs
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    // Reseta o texto de resultados
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>';
    // Desabilita o botão de reiniciar
    alterarStatusBotao();
}
