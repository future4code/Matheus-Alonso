/* 1.  Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]

    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })

    a) O que vai ser impresso no console?
    Resposta: Vai imprimir todos os arrays com nome e apelido.




2. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })

    console.log(novoArrayB)

    a) O que vai ser impresso no console?
    Resposta:Vai retornar todos os nomes de usuarios.



3. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)

    a) O que vai ser impresso no console?
    Resposta: todos os apelidos diferentes de chijo.Leia

     */

/*     
1-Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos

b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */


//A
/* 
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

function extrairNome(obj) {
  return obj.nome
}

const primeiroNome = extrairNome(pets[2])

console.log(primeiroNome)
const nomes = pets.map(extrairNome)
console.log(nomes)

 


//B
const petSalsicha = pets.filter(pets => pets.raca === "Salsicha")
console.log(petSalsicha)


//C
const filtroPoodle = pets.filter(pets => pets.raca === "Poodle")
const petPoodle = filtroPoodle.map(pet => pet.nome)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${petPoodle}`) */


//------------------------------------------------------------------------------------------------------------

/* 2. Dado o seguinte array de produtos, realize as operações pedidas 
nos itens abaixo utilizando as funções de array **map** e **filter:**

    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }


    
    a) Crie um novo array que contenha apenas o nome de cada item

    b) Crie um novo array que contenha um objeto com o 
    nome e o preço de cada item, aplicando 5% de desconto em todos eles

    c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

    e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
     Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
 */

     const produtos = [
      { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
      { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
      { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
      { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
      { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
      { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
      { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
      { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
      { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
      { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]
//-----------------------------------------------------------------------------------------

//A

const nomeDosItens = produtos.map(produtos => produtos.nome)
console.log(nomeDosItens)


//B
const produtosEmDesconto = produtos.map((produto) => {
  nome = produto.nome;
  preco = produto.preco * 0.05;
  const novaArray = {nome: produto.nome, preco: produto.preco}
  return novaArray
})
console.log(produtosEmDesconto)

//c
const Bebid = produtos.filter(produtos => produtos.categoria === "Bebidas")
console.log(Bebid)

//D

const yps = produtos.filter(produtos => produtos.nome.includes('Ypê'))
console.log(yps)

//E

const ypeComFrase = yps.map(yps => `Compre ${yps.nome} por ${yps.preco}`)
console.log(ypeComFrase)