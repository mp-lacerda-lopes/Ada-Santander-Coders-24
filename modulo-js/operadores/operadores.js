// OPERADORES

//OPERADORES BOOLEANOS: são baseados em comparações

const numero1 = 10;
const numero2 = 12;

//Comparações com == compara apenas o valor, enquanto comparações com === compara valor e tipo das variáveis.
console.log(numero1 == numero2); //false
console.log(numero1 === numero2); //false

console.log(numero1 == "10"); // true
console.log(numero1 === "10"); // false - Apesar do valor ser igual, o tipo é diferente


// CONJUNÇÕES LÓGICAS: Combinação de duas operações de comparação
//    || é o mesmo que "ou"            && é o mesmo que "e"

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); //Ambas condições precisam ser verdadeiros
console. log(idadePessoa1 >= 18 || idadePessoa2 >= 18); //Apenas uma precisa ser verdadeira

console. log(!true); // resulta sem FALSE       ! exclamação é operador de inversão

console.log(!(idadePessoa1 >=18)); //Retorna verdadeiro se a pessoa for menor de idade


