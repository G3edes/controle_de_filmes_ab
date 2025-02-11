/***********************************************************************************\
|* Objetivo:controller responsável pela regra de negócio referente ao CRUD de filme |
|* Data:11/02/2025                                                                  |
|* Autor:Gabriel Silva Guedes                                                       |
|* Versão:1.0                                                                       | 
\***********************************************************************************/

//Função para tratar a inserção de um novo filme no DAO
const inserirFilme = async function (filme) {
    if (filme.nome == '' || filme.nome == undefined || filme.nome == null || filme.nome.lenght>80 ||
        filme.duracao == '' || filme.duracao == undefined || filme.duracao == null || filme.duracao.lenght>5 ||
        filme.sinopse == '' || filme.sinopse == undefined || filme.sinopse == null ||
        filme.data_lancamento == '' || filme.data_lancamento == undefined || filme.data_lancamento == null || filme.data_lancamento.lenght>10 ||
        filme.foto_capa == undefined || filme.foto_capa .lenght>200 ||
        filme.link_trailer == undefined || filme.link_trailer.lenght>10){
        }
}
//Função para tratar a atualização de um novo filme no DAO
const atualizarFilme = async function (params) {
    
}
//Função para tratar a exclusão de um filme no DAO
const excluirFilme = async function (params) {
    
}
//Função para tratar o retorno de uma lista de filmes do DAO
const listarFilme = async function (params) {
    
}
//Função para tratar o retorno de um filme filtrado pelo ID do DAO
const buscarFilme = async function (params) {
    
}