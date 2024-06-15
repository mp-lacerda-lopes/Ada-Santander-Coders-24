// SWITCH-CASE: Muito util quando sua variável possui valores específicos

const permissoes = "banana"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
case "aluno": 
console.log("Você só pode visualizar as aulas.");
break; //ordem de parada após execução do caso, ou seja, após encontrar o valor procurado, irá executar e parar o algoritmo.
case "professor":
console.log("Você pode alterar as aulas e adicionar exercicios.");
break;
case "admin":
console.log("Você pode fazer o que quiser no sistema!");
break;
default:
console. log("Não sei quem voce é o sistema");

}