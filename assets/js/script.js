'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => {
  document.getElementById('modal').classList.remove('active');
  limparFormulario();
}

document.getElementById('cadastrarProduto').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('salvarProduto').addEventListener('click', () => {
  cadastrarProduto();
  closeModal();
});

document.getElementById('cancelarProduto').addEventListener('click', () => {
  closeModal();
});


const produtos = [];

// Função para cadastrar um novo produto
function cadastrarProduto() {
  const nome = document.getElementById('nomePr').value;
  const marca = document.getElementById('marcaPr').value;
  const quantidade = document.getElementById('quantPr').value;
  const categoria = document.getElementById('categPr').value;
  const valor = document.getElementById('valorPr').value;

  // Cria um objeto com as informações do produto
  const produto = {
    nome,
    marca,
    quantidade,
    categoria,
    valor,
  };

  // Adiciona o novo produto no array de produtos
  produtos.push(produto);

  // Limpa os campos do formulário
  limparFormulario();

  // Atualiza a tabela de produtos na tela
  atualizarTabelaProdutos();
}

// Função para limpar os campos do formulário de cadastro de produtos
function limparFormulario() {
  document.getElementById('nomePr').value = '';
  document.getElementById('marcaPr').value = '';
  document.getElementById('quantPr').value = '';
  document.getElementById('categPr').value = '';
  document.getElementById('valorPr').value = '';
}

// Função para atualizar a tabela de produtos na tela
function atualizarTabelaProdutos() {
  const tabela = document.getElementById('produtosTableBody');
  tabela.innerHTML = '';

  // Percorre o array de produtos e adiciona uma nova linha na tabela para cada produto
  produtos.forEach((produto, index) => {
    const linha = tabela.insertRow();
    linha.insertCell().innerHTML = produto.nome;
    linha.insertCell().innerHTML = produto.marca;
    linha.insertCell().innerHTML = produto.quantidade;
    linha.insertCell().innerHTML = produto.categoria;
    linha.insertCell().innerHTML = produto.valor;
    linha.insertCell().innerHTML = '<button type="button" class="button blue" onclick="editarProduto(' + index + ')">Editar</button> <button type="button" class="button red" onclick="excluirProduto(' + index + ')">Excluir</button>';
  });
}

// Função para abrir o modal de cadastro de produtos
function abrirModal() {
  document.getElementById('modal').style.display = 'block';
}

// Função para excluir um produto do array de produtos
function excluirProduto(index) {
  produtos.splice(index, 1);
  atualizarTabelaProdutos();
}

// Função para editar um produto
function editarProduto(index) {
  // Preenche o formulário com os dados do produto selecionado
  const produto = produtos[index];
  document.getElementById('nomePr').value = produto.nome;
  document.getElementById('marcaPr').value = produto.marca;
  document.getElementById('quantPr').value = produto.quantidade;
  document.getElementById('categPr').value = produto.categoria;
  document.getElementById('valorPr').value = produto.valor;

  // Remove o produto do array de produtos
  produtos.splice(index, 1);

  // Atualiza a tabela de produtos na tela
atualizarTabelaProdutos();

// Abre o modal de cadastro de produtos
abrirModal();
}

// Função para atualizar um produto existente
function atualizarProduto(index) {
// Atualiza as informações do produto selecionado
const produto = produtos[index];
produto.nome = document.getElementById('nomePr').value;
produto.marca = document.getElementById('marcaPr').value;
produto.quantidade = document.getElementById('quantPr').value;
produto.categoria = document.getElementById('categPr').value;
produto.valor = document.getElementById('valorPr').value;

// Limpa os campos do formulário
limparFormulario();

// Atualiza a tabela de produtos na tela
atualizarTabelaProdutos();

// Fecha o modal de cadastro de produtos
closeModal();
}

// Função para salvar um produto (atualizar ou cadastrar)
function salvarProduto() {
const index = document.getElementById('produtoIndex').value;

// Se o índice do produto existir, atualiza o produto. Senão, cadastra um novo produto.
if (index) {
atualizarProduto(index);
} else {
cadastrarProduto();
}
}

// Event listener para o botão de salvar produto dentro do modal
document.getElementById('salvarProdutoModal').addEventListener('click', salvarProduto);

// Função para abrir o modal de edição de produtos
function abrirModalEditar(index) {
// Preenche o formulário com os dados do produto selecionado
const produto = produtos[index];
document.getElementById('nomePr').value = produto.nome;
document.getElementById('marcaPr').value = produto.marca;
document.getElementById('quantPr').value = produto.quantidade;
document.getElementById('categPr').value = produto.categoria;
document.getElementById('valorPr').value = produto.valor;

// Adiciona o índice do produto como valor do campo oculto no modal
document.getElementById('produtoIndex').value = index;

// Muda o título do modal
document.getElementById('modalTitle').innerHTML = 'Editar Produto';

// Abre o modal de cadastro de produtos
abrirModal();
}

// Função para adicionar um novo produto
function adicionarProduto() {
// Limpa o índice do produto selecionado (se houver)
document.getElementById('produtoIndex').value = '';

// Limpa os campos do formulário
limparFormulario();

// Muda o título do modal
document.getElementById('modalTitle').innerHTML = 'Cadastrar Produto';

// Abre o modal de cadastro de produtos
abrirModal();
}

// Event listener para o botão de adicionar produto
document.getElementById('adicionarProduto').addEventListener('click', adicionarProduto);

// Função para fechar o modal de cadastro de produtos ao clicar fora dele
window.onclick = function(event) {
const modal = document.getElementById('modal');
if (event.target == modal) {
closeModal();
}
}




  
  
  
