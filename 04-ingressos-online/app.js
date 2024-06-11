// Função principal para acionar a compra conforme o tipo de ingresso selecionado
function comprarIngresso() {
    // Obtém o elemento de seleção do tipo de ingresso
    let tipo = document.getElementById('tipo-ingresso');
    
    // Obtém o valor da quantidade de ingressos desejados
    let qtd = parseInt(document.getElementById('qtd').value);

    // Evita inserção de quantidade inválida
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Verifica o tipo de ingresso selecionado e chama a função correspondente
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

// Função específica para comprar ingressos do tipo "pista"
function comprarPista(qtd) {
    // Obtém a quantidade disponível de ingressos do tipo "pista"
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    // Verifica se a quantidade desejada é maior que a disponível
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        // Atualiza a quantidade disponível após a compra
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

// Função específica para comprar ingressos do tipo "cadeira superior"
function comprarSuperior(qtd) {
    // Obtém a quantidade disponível de ingressos do tipo "cadeira superior"
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    // Verifica se a quantidade desejada é maior que a disponível
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        // Atualiza a quantidade disponível após a compra
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

// Função específica para comprar ingressos do tipo "cadeira inferior"
function comprarInferior(qtd) {
    // Obtém a quantidade disponível de ingressos do tipo "cadeira inferior"
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    // Verifica se a quantidade desejada é maior que a disponível
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        // Atualiza a quantidade disponível após a compra
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
