/* 1- leita o codigo abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
```

a) O que vai ser impresso no console?
Resposta: Vai imprimir Elenco: Matheus Nachtergaele, virginia cavendish
e tambem canal: "Globo", horario: "14h"



2- leia o codigo abaixo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
```

a) O que vai ser impresso no console?
Resposta: vai ser impresso o cachorro: juba, apos isso vai ser impresso um gato chamado juba
tartaruga vai ser impreso Jubo

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Resposta: Entrar na sintaxe e criar outro nome ou adicionar outra coisa. */


/* 3- leia o codigo abaixo */

/* 
  function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */


/* a) O que vai ser impresso no console?
Resposta: false undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu? 
Resposta: Por que não foi definido valor.

*/

/* a) Crie um objeto. Ele deve conter duas propriedades:
 nome (string) e apelidos (um array que sempre terá 
  exatamente **três apelidos**). 
  Depois, escreva uma função que recebe como entrada um 
  objeto e imprime uma mensagem no modelo abaixo**:**  */

/* 
Resposta:
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
console.log(frase)


b) Agora, usando o operador spread, crie um novo objeto mantendo o 
valor da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como 
argumento o novo objeto */

/* 
Resposta B:

const pessoa = {
  nome: "Amanda", 
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`

const copiapessoa = {
  ...pessoa,
  nome: "Amanda",
  apelidos: ["Amandona", "Mand", "Mando"]
}
console.log(copiapessoa) 
*/



/* a) Crie dois objetos diferentes com 
as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba 
esses objetos e retorne um array com
 as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */

/*     
Resposta:

    const pessoa = {
    	nome: "Bruno", 
      idade: 23, 
    	profissao: "Instrutor"
    }
    const pessoa2 = {
      nome: "Matheus",
      idade: 21,
      profissao: "Desenvolvedor Web"
    }

   
    console.log([`Nome: ${pessoa.nome} e ${pessoa2.nome}`]); 
    console.log([`Numero de Caracteres de: ${pessoa.nome.length} e ${pessoa2.nome.length}`]);
    console.log([`idade: ${pessoa.idade} e ${pessoa2.idade}`]);
    console.log([`profissão: ${pessoa.profissao} e ${pessoa2.profissao}`]);
    console.log([`Numero de Caracteres de profissão: ${pessoa.profissao.length} e ${pessoa2.profissao.length}`]);


 */
    /* 
    3. Resolva os passos a seguir: 

    a) Crie uma variável de escopo global 
    que guarde um `array` vazio chamada `carrinho`

    b) Crie três novos objetos que 
    representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
     nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

    c) Crie uma função que **receba** 
    um objeto fruta por **parâmetro** e coloque-a dentro do 
    array de `carrinho`. Invoque essa função passando os três objetos criados. 

    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**  */

const carrinho = []
const fruta1 = {
  nome: `Banana`,
disponibilidade: true}


const fruta2 = {
  nome: `Maça`,
disponibilidade: false}


const fruta3 = {
  nome: `Uva`,
  disponibilidade: true}


carrinho.push(fruta1, fruta2, fruta3)
console.log(carrinho)
