let btnEnviar = document.querySelectorAll('#botoes button')[0];
let nome = document.querySelectorAll('#wrap input')[0];
let mgml = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];
let tabela = document.querySelector('#saida table');
let BD = [];

// Verificar se há dados salvos no armazenamento local
if (localStorage.getItem('BD')) {
    // Recuperar os dados do armazenamento local
    BD = JSON.parse(localStorage.getItem('BD'));

    // Montar a tabela com os dados recuperados
    montarTabela();
}

// Evento de clique do botão enviar
btnEnviar.onclick = function () {
    let produto = new Object();
    produto.nome = nome.value;
    produto.mgml = mgml.value;
    produto.preco = preco.value;

    produto.id = BD.length;
    BD.push(produto);
    tabela.innerHTML += `<tr><td>${produto.nome}</td><td>${produto.mgml}</td><td>${preco.value}</td></tr>`;

    // Salvar os dados no armazenamento local
    localStorage.setItem('BD', JSON.stringify(BD));
}

// Função para montar a tabela com os dados
function montarTabela() {
    for (let i = 0; i < BD.length; i++) {
        tabela.innerHTML += `<tr><td>${BD[i].nome}</td><td>${BD[i].mgml}</td><td>${BD[i].preco}</td></tr>`;
    }
}