/* 1. O que o código abaixo está fazendo? 
resposta: valor é igual a 0, se i vale 0, vai adicionando 1 até o numero 5

Qual o resultado impresso no console?
resposta: vai imprimir 1, 2, 3, 4, 5

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)

2. Leia o código abaixo:

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }

    a) O que vai ser impresso no console?
    Resposta: se o numero for maior que 18 imprima.


    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
    é suficiente? Se sim, o que poderia ser usado para fazer isso?
    Resposta: SIM for(let lista of listas){
                   numero+=lista+" "
    }


3. Qual seria o resultado impresso no console, 
se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
    Resposta: 4 quantidade de asteristicos.
    
    */

    
    /* 
    1 -. Pergunte ao usuário quantos bichinhos de estimação 
    ele tem e guarde esse dado em uma variável. 

    a) Se a quantidade for 0, imprima no console 
    "Que pena! Você pode adotar um pet!"


    b) Se a quantidade for maior que 0, solicite que o 
    usuário digite os nomes deles, um por um, 
    e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console
    
    
  */ 

  
/* 
const qtdBichos = Number(prompt("Quantos bichos de estimação você tem?"))
let i = 0
const array = []
if (qtdBichos === 0){
  console.log("Que pena! Você pode adotar um pet!")
}
while(i < qtdBichos){
  let nome = prompt("Qual o nome do seus bichos?")
  array.push(nome)
  i = i + 1
}
  console.log(array)
 */

 

/*     2. Considere que você tenha acesso a um `array`  
    (chamado de 'array original') que é composto somente de números. 
    Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
    realizando as operações pedidas:

        a) Escreva um programa que **imprime** 
        cada um dos valores do array original.

        b) Escreva um programa que **imprime** 
        cada um dos valores do array original divididos por 10

        c) Escreva um programa que **crie** um novo array contendo, 
        somente, os números pares do array original e **imprima** esse novo array

        d) Escreva um programa que **crie** um novo array contendo 
        strings, da seguinte forma: "O elemento do índex `i` é: `numero`". 
        Depois, **imprima** este novo array.

        e) Escreva um programa que imprima no console 
        o maior e o menor números contidos no array original
 */
//A
const arrayOriginal = [2, 3, 4, 5, 6, 7]
for (numero of arrayOriginal)
console.log(numero)

//B
for (numero of arrayOriginal)
console.log(numero/10)


//C
const novaArray = []
for(i = 0; i < arrayOriginal.length; i++){
  if (arrayOriginal[i] % 2 === 0)
  novaArray.push(arrayOriginal[i])
}
//D
for(elemento of arrayOriginal){
  console.log(`O elemento do index 0 é ${elemento}`)
}

//E 
let maiorNumero = 0
let menorNumero = arrayOriginal[0]

for(numero of arrayOriginal){
  if(numero > maiorNumero){
    maiorNumero = numero
  }
}
for (numero of arrayOriginal){
  if(numero < menorNumero){
    menorNumero = numero
  }
}
console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)