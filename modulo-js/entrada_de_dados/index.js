//Trabalhando conceitos utilizando a biblioteca readline-sync  -- npm install readline-sync
// documentação em https://www.npmjs.com/package/readline-sync

// Importando a biblioteca readline-sync
const readlineSync = require('readline-sync'); // require é reservada no JS para importação de bibliotecas

// Solicitando a idade do usuário
const idade = readlineSync.question('Escreva a sua idade: '); 

// Exibindo a idade no console
console.log(`Sua idade é: ${idade}`);

const idadeNumber = Number(idade);

console. log(idadeNumber, typeof idadeNumber);

console. log(Number("X")); // NaN: Not a Number

console. log(String(10), typeof String(10));

console.log(Boolean(2)); // só o zero e false em boolean, todo o resto é verdadeiro






// Coerção Implicita

console. log(1 + "1"); //Ao usar + o JS concatena, transformando o resultado em string
console. log("10"+ 5);
console.log(10 - "5"); // utilizando outros operadores, o JS transforma em número e faz o cálculo corretamente

// Qual será a saída desse código?
let n = 1 + "1"; // '11' (string)

n =n - 1; // 11 - 1 = 10

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // 5 + 4 + '5' = 9 + '5' = '95'

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // '52' + 3 + 4 = '523' + 4 = '5234'

//Qual será a saída desse código?
console.log("10" - "4" -"3" - 2 + "5"); // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'

