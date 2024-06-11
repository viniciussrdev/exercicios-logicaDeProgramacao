// Declaração de um array vazio para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    // Verifica se o campo está vazio
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    // Verifica se o nome do amigo já foi adicionado à lista
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    // Obtém o elemento da lista de amigos
    let lista = document.getElementById('lista-amigos');

    // Adiciona o nome do amigo ao array
    amigos.push(amigo.value);

    // Atualiza a exibição da lista de amigos na página
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    // Limpa o campo de entrada de texto
    amigo.value = '';
}

// Função para sortear os amigos
function sortear() {
    // Verifica se há pelo menos 4 amigos para realizar o sorteio
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    // Embaralha a lista de amigos
    embaralhar(amigos);

    // Obtém o elemento da lista de sorteio
    let sorteio = document.getElementById('lista-sorteio');

    // Exibe o resultado do sorteio na página
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

// Função para embaralhar uma lista
function embaralhar(lista) {
    // Loop reverso para embaralhar os elementos
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Troca os elementos de posição
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para reiniciar o processo
function reiniciar() {
    // Limpa o array de amigos
    amigos = [];
    // Limpa a exibição da lista de amigos e do sorteio na página
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
