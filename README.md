// Funções de listas
//                  0       1        2           3
const alunos = ["Amanda","Ariel", "Carlos", "Cristhyan"]

// Adicionar um novo aluno no final da lista
alunos.push("Raniel")
console.log(alunos)

// Remover o último
alunos.pop()

// Adicionar ou remover dependendo do índice
// .splice(índice, qtd_deletar, itens_adicionados)
alunos.splice(2, 1, "Raniel") // a partir do índice 2, remove 1 elemento e adiciona "Raniel"
console.log(alunos)

// Percorrer uma lista
alunos.forEach((aluno) => {
    console.log(aluno)
})
