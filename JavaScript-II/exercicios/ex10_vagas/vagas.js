// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe uma data limite (dd/m/aaaa) para a vaga:')

    const confirm = confirm(
        'Deseja criar uma nova vaga com estas informações?\n' +
        'Nome: ' + nome + "\nDescrição: " + descricao + '\nData limite: ' + dataLimite
    )
    if(confirm) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] =}
        vagas.push(novaVaga)
        alert('Nova vaga adicionada.')
    }
}

function exebirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir:')
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(funciont (textoFinal, candidato))
}