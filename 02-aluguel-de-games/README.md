# Exercício 02 - AluGames

## Descrição
Este exercício simula um aluguel de games, AluGames, onde o usuário receberá a indicação visual se um jogo está alugado ou não.
Este projeto é uma aula do curso "Lógica de programação: praticando com desafios" da Formação "A partir do zero: iniciante em Programação" da Alura. Desenvolvido para estudar lógica de programação.

## Estrutura do Projeto
- **index.html**: Estrutura HTML da página.
- **css/main.css**: Estilos CSS para a página.
- **app.js**: Lógica JavaScript para manipulação dos estados de aluguel dos jogos.
- **img/**: Diretório contendo as imagens usadas na página (logos, capas de jogos, etc.).

## Funcionalidades
- **Listagem de Jogos**: A página exibe uma lista de jogos de tabuleiro disponíveis para aluguel.
- **Alugar e Devolver Jogos**: Ao clicar no botão "Alugar" em um jogo disponível, o estado do jogo é alterado para alugado, e o botão muda para "Devolver". Ao clicar em "Devolver", o estado volta para disponível.

## Tecnologias e Estrutura do código
### HTML
A estrutura HTML contém um contêiner principal (main) que inclui a logo, uma seção divisória, o título da página e a seção do dashboard onde os jogos são listados.
Cada jogo é representado por um item de lista (li) contendo a imagem do jogo, o nome e um botão para alugar ou devolver o jogo.
### CSS
O CSS estiliza a página para proporcionar uma aparência visual agradável e responsiva.
Estilos adicionais são aplicados aos itens do dashboard para indicar quando um jogo está alugado.
### JavaScript
O arquivo app.js contém a função alterarStatus(id) que altera o estado de um jogo entre disponível e alugado ao clicar nos botões.
### Imagens
As imagens dos jogos e outras imagens decorativas estão localizadas na pasta img.


## Como Executar
1. **Clone o repositório**:
   ```sh
   git clone <URL do repositório>

2. **Navegue até o diretório do projeto**:
   ```sh
   cd AluGames

3. **Abra o arquivo index.html em seu navegador**:
- Basta abrir o arquivo index.html em qualquer navegador web para visualizar a página.

## Créditos
Reprodução de um curso da Alura.
