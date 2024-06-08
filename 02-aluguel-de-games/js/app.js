// Função para alterar o status de aluguel do jogo
function alterarStatus(id) {
    // Seleciona o item do jogo clicado pelo ID
    let gameClicado = document.getElementById(`game-${id}`);
    // Seleciona a imagem e o botão dentro do item do jogo
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Verifica se o jogo está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Se estiver alugado, remove a classe indicando aluguel
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        // Se não estiver alugado, adiciona a classe indicando aluguel
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
