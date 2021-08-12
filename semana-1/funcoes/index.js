/* 
1- leia o codigo abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a) O que vai ser impresso no console?
Resposta: vai imprimir a função 2*5 = 10 e 10*5 = 50

b) O que aconteceria se retirasse os dois `console.log` 
e simplesmente invocasse a função `minhaFuncao(2)` 
e `minhaFuncao(10)`? O que apareceria no console? 
resposta: não aconteceria nada, não daria nenhum valor.
*/
/* 
2. Leia o código abaixo

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e 
    qual é sua utilidade

    b. Determine qual será a saída no 
    console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra` 
         
    Resposta A: Vai aparecer oque o usuario escreveu 
    com a palavra cenoura incluido, alem de deixar todas
    as letras em minusculo.

    Resposta B: eu gosto de cenoura cenoura
                cenoura é bom pra vista cenoura
                cenouras crescem na terra cenoura


         
         */

/* 
a) A função não deve receber nenhum parâmetro e 
deve imprimir uma mensagem falando algumas informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
 o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
 Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. 
*/

/* 

A)

const caio = [];

const caios = ("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");

caio.push(caios);

console.log(caios);

const removercaios = ("Eu sou Matheus, tenho 21 anos, moro em São Vicente e sou estudante.");

console.log(removercaios) 

*/
/* 
Resposta: 
function aboutMySelf1(name, age, city, profession){
const aboutMe1 = `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}`
return aboutMe1
}
const info = aboutMySelf1("Matheus", 21, "São Vicente", "estudante")
console.log(info) 
*/

//2- escreva as funções escritas abaixo: 
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

//b) Faça uma função que recebe 2 números e retorne um booleano 
//que informa se o primeiro número é **maior ou igual** ao segundo.

//c) Escreva uma função que receba um número e devolva um 
//booleano indicando se ele é par ou não

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro
//e imprima o tamanho dessa mensagem, juntamente com uma versão dela em 
//letras maiúsculas.

/* 
Resposta A)

function numbers(n1,n2){
    const soma = n1+n2
    console.log(soma)
}
const n1 = Number(prompt("Escreva um numero"))
const n2 = Number(prompt("Escreva outro numero"))
numbers(n1,n2) 
*/
/* 

Resposta B)

function boolean(n1,n2){
  const bolean = n1>=n2
  console.log(bolean)
}
const n1 = Number(prompt("Escreva um numero"))
const n2 = Number(prompt("Escreva outro numero"))
boolean(n1,n2)  
*/

/* 
Resposta C)

function numbers(n1){
  const soma = ((n1 % 2) === 0)  
  console.log(soma)
}
const n1 = Number(prompt("Escreva um numero"))
numbers(n1)  

*/

/* 

Resposta D)

const nomePrompt = prompt("Manda um nome ae")
function imprimeNome(string){
  console.log(`${string}`)
}

console.log(nomePrompt.toUpperCase())
console.log("Tamanho da frase: ", nomePrompt.length)

 */

 
/* 
3- Crie uma função para cada uma das operações básicas
 (soma, subtração, multiplicação e divisão). 
 Em seguida, peça para o usuário inserir dois 
 números e **chame** essas 4 funções com esses valores 
 inputados pelo usuário sendo o argumento.
Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
Lembre-se de converter a entrada do usuário para número
 antes de fazer os cálculos :) */

 function numbers(n1, n2){
  const soma = (n1,n2) 
}

function numberss(n1, n2){
  const sub = (n1 % n2) 
}

  function numbersss(n1, n2){
    const multi = (n1 * n2) 
}
function numberssss(n1, n2){
  const div = (n1 / n2) 
}

function numb(n1, n2){
  const div = (n1,n2)
}

const n3 = Number(prompt("Digite um numero"))
const n4 = Number(prompt("Digite outro numero"))

numb(n3,n4)
console.log("Numeros Inseridos: ", n3,"e", n4)

numbers(n3,n4)
console.log("Soma: ", n3 + n4)

numberss(n3,n4)
console.log("Diferença: ", n3 % n4)

numbersss(n3,n4)
console.log("Multiplicado: ", n3 * n4)

numberssss(n3,n4)
console.log("Divisão: ", n3 / n4)