//ESTRUTURAS CONDICIONAIS - CONTROLE DE FLUXO.

const prompt = require('readline-sync');
// if/ else
const idade = Number(prompt.question('Qual a sua idade?'));
if( idade <= 16){
    console.log('Você ainda possui menor de idade');
} else {
    console.log('Você possui maior de idade, pode ser preso!');
}

//  else if

const mediaDoAluno = 6.999999;

// Média >= 7 => Aprovado
// Média < 7 e Média >= 5 => Prova final
// Média < 5 => Reprovado

if (mediaDoAluno >= 7) {
console. log("Aprovado!");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
console.log("Prova final");
} else {
console.log("Reprovado");
}


// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH (PPD)

const idadeDaPessoa = 16;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
console.log("Você pode dirigir!");
} else {
[console.log("Você NÃO pode dirigir!")];
}

// OPERADOR TERNÁRIO: Muito útil para já retornar um valor que pode ser atribuído a uma variável ou função
const idade2 = 30;

const mensagem = idade2 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem);


/*
Em JavaScript, truthy e falsy referem-se a valores que são avaliados como verdadeiros ou falsos em contextos booleanos. Aqui está uma explicação simples:

Truthy: Qualquer valor que é considerado verdadeiro quando convertido para booleano. Por exemplo, números diferentes de zero, strings não vazias e objetos são truthy.
Falsy: Qualquer valor que é considerado falso quando convertido para booleano. Exemplos incluem null, undefined, 0, false e strings vazias ('').
Esses conceitos são importantes ao usar estruturas condicionais, como if e while, para tomar decisões com base nos valores das variáveis. 
*/