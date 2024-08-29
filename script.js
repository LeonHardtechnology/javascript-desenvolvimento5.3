// Método simples para adicionar um título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Título do Site';
document.body.appendChild(titulo);

// Método complexo para adicionar um produto
const produto = document.createElement('div');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Produto';
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição do produto.';
produto.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';
produto.appendChild(precoProduto);

// Adicionando uma imagem (opcional)
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150';
imagemProduto.alt = 'Imagem do Produto';
produto.appendChild(imagemProduto);

document.body.appendChild(produto);
