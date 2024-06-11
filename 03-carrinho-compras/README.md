# Exercício 03 - Carrinho de Compras

## Descrição
Este exercício é uma aplicação web simples de carrinho de compras, onde é possível adicionar produtos ao carrinho, visualizar a lista de produtos e o valor total da compra, além de limpar o carrinho. 
Este projeto é uma aula do curso "Lógica de programação: praticando com desafios" da Formação "A partir do zero: iniciante em Programação" da Alura. Desenvolvido para estudar estruturas de programação.

## Estrutura do Projeto
- `index.html`: Estrutura HTML da aplicação.
- `style.css`: Estilos CSS para a aparência da aplicação.
- `app.js`: Código JavaScript para a funcionalidade do carrinho de compras.

## Funcionalidades
### Adicionar Produto ao Carrinho

No formulário, você pode selecionar um produto, informar a quantidade desejada e clicar no botão "Adicionar". O produto será adicionado à lista de produtos no carrinho e o valor total será atualizado.

### Limpar Carrinho

Clique no botão "Limpar" para remover todos os produtos do carrinho e resetar o valor total da compra.

## Tecnologias
### HTML
Utilizado para estruturar a página e os elementos do carrinho de compras.

### CSS
Utilizado para estilizar a página e os elementos do carrinho de compras, tornando a interface mais atraente e fácil de usar.

### JavaScript
Utilizado para manipular a DOM (Document Object Model) e gerenciar a lógica do carrinho de compras.

- `adicionar()`: Função que recupera os dados do produto e quantidade informada, calcula o subtotal, adiciona o produto ao carrinho e atualiza o valor total da compra.
- `limpar()`: Função que reseta o valor total da compra e limpa a lista de produtos no carrinho.

#### Principais Métodos e Propriedades Utilizados
- **getElementById**: Método que retorna uma referência ao elemento pelo seu ID especificado.
- **innerHTML**: Propriedade que define ou retorna o conteúdo HTML de um elemento.
- **textContent**: Propriedade que define ou retorna o conteúdo textual de um nó e seus descendentes.
- **.value**: Propriedade que define ou retorna o valor do atributo `value` de um campo de formulário.

## Instruções de Uso
1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador web.
3. Selecione um produto, informe a quantidade e clique em "Adicionar" para adicionar o produto ao carrinho.
4. Para limpar o carrinho, clique no botão "Limpar".

## Observações
- Certifique-se de que o campo de quantidade está preenchido corretamente antes de adicionar um produto ao carrinho.
- O valor total é atualizado automaticamente conforme os produtos são adicionados.

## Créditos
Reprodução de um curso da Alura.