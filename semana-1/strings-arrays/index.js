/* 
1. Indique todas as mensagens impressas no console, 
**SEM EXECUTAR o programa**.

let array
console.log('a. ', array) = Resposta : vai imprimir .a e undefined.

array = null
console.log('b. ', array) = Resposta : vai imprimir .b e undefined.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) = Resposta : vai imprimir c. e a lista 3, 4.. etc.

let i = 0
console.log('d. ', array[i]) = Resposta : vai imprimir d. e a lista e o 0

array[i+1] = 19
console.log('e. ', array) = Resposta : vai imprimir e. 19

const valor = array[i+6]
console.log**('f. ', valor)** Resposta: vai imprimir f. 114 pois foi definido que 1 é igual a 19 pois o i tem o valor de 0
```
let array
console.log('a. ', array)  Resposta: Vai imprimir a. 19

array = null
console.log('b. ', array) Resposta: vai imprimir b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) Resposta: vai imprimir c. a lista e a quantidade de itens.

let i = 0
console.log('d. ', array[i]) Reposta: d. lista completa com o 0

array[i+1] = 19
console.log('e. ', array) Resposta: vai imprimir e. 19

const valor = array[i+6]
console.log**('f. ', valor) Resposta: f. lista completa com o numero 7

**
``` */

/* 
2- Leia o código abaixo com atenção  

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
----------------------------------------------------------------------------------------------------
Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

Resposta: vai imprimir "SUB NUM ÔNBUS EM MRROCOS" foram removidos as letras (A , I) e o upper deixa as letras grandes.


*/

/* 
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
Você pode fazer isso de duas formas:
Concatenando as strings (com o sinal de +)
Utilizando template strings (e envelopando a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
 
*/
  /* Resposta */

/* 
const nome = prompt("Digite seu nome: ")
const email = prompt("Digite seu email: ")

console.log("O email " + email , "foi cadastrado com sucesso. Seja bem-vinda(o), " + nome) */

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima no console o array completo

    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */


 /*    
    const comidas = ["Lasanha", "Pastel", "Lanche", "Batata Frita", "Arroz"]
    const tam = (comidas.length)

    console.log(comidas)
    console.log("Essas são as minhas comidas preferidas: ",)
    console.log("Lasanha")
    console.log("Pastel")
    console.log("Lanche")
    console.log("Batata Frita")
    console.log("Arroz")


    const usuario = prompt("Qual sua comida Preferida? ")
  console.log("Essas são as minhas comidas preferidas: ",)
  console.log("Lasanha")
  console.log(usuario)
  console.log("Lanche")
  console.log("Batata Frita")
  console.log("Arroz") 
  */

  /* 
  3. Faça um programa, seguindo os passos:

    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    c) Imprima o array no console

    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    e) Remova da lista o item de índice que o usuário escolheu.

    f) Imprima o array no consoleImprima no console

        Para remover um item de um array, você pode utilizar a função splice!
        Caso não se lembre como ela funciona, não tem nenhum problema: uma breve pesquisa no google te trará vários exemplos.
 */
  
/*   
  const listaDeTarefas = [];

  const usuario = prompt("Me diga 3 tarefas que você precisa realizar: ")
  const usuarios = prompt("Me diga 3 tarefas que você precisa realizar: ")
  const usuarioss = prompt("Me diga 3 tarefas que você precisa realizar: ")
  
  listaDeTarefas.push(usuario);
  listaDeTarefas.push(usuarios);
  listaDeTarefas.push(usuarioss);

console.log(listaDeTarefas);

const removerTarefas = Number(
prompt("Digite 0, 1 ou 2 para remover tarefa desejada")
);

listaDeTarefas.splice(removerTarefas, 1);
console.log(`Suas tarefas atuais são: ${listaDeTarefas}`); 

*/