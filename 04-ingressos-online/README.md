# Exercício 04 - Sistema e-Ticket

## Descrição
Este exercício é um sistema de compra de ingressos online, onde os usuários podem selecionar o tipo de ingresso, especificar a quantidade desejada e efetuar a compra. O sistema também exibe a quantidade disponível de cada tipo de ingresso. 

## Estrutura do Projeto
- **index.html**: Estrutura principal da página web.
- **styles/_reset.css**: Reset de CSS para garantir uma base consistente de estilos.
- **styles/style.css**: Estilos personalizados para a página.
- **app.js**: Lógica JavaScript para a funcionalidade de compra de ingressos.
- **assets/**: Contém as imagens utilizadas no projeto (logos, gráficos, etc).

## Funcionalidades
- Seleção de tipo de ingresso (Pista, Cadeira Superior, Cadeira Inferior).
- Entrada da quantidade desejada de ingressos.
- Validação da quantidade disponível antes da compra.
- Atualização da quantidade disponível após a compra.

## Como Executar o Projeto
1. Clone o repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador web.
3. Interaja com o formulário para comprar ingressos e verificar as funcionalidades.

## Tecnologias
- HTML
- CSS
- JavaScript

## Estrutura HTML
- O `header` contém a logo do sistema.
- O `main` é o container principal que inclui:
  - O título.
  - O formulário para selecionar o tipo e a quantidade de ingresso.
  - A seção que exibe a quantidade disponível de cada tipo de ingresso.

## Estilos CSS
- O layout é estilizado para ser responsivo e visualmente atraente, com uso de gradientes, fontes personalizadas e elementos gráficos decorativos.

## Lógica JavaScript
- Funções para gerenciar a compra de ingressos:
  - `comprarIngresso()`: Função principal que chama as funções específicas de compra conforme o tipo de ingresso selecionado.
  - `comprarPista(qtd)`, `comprarSuperior(qtd)`, `comprarInferior(qtd)`: Funções específicas para cada tipo de ingresso, que validam a quantidade disponível e atualizam o valor após a compra.

## Imagens
- As imagens estão armazenadas na pasta `assets` e são utilizadas para logo, elementos gráficos e decorativos na página.

## Créditos
Reprodução de um curso da Alura.
