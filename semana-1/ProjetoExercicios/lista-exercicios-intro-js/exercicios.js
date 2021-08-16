// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  soma = (num1 + num2)
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
  function calculaAreaRetangulo(altura, base) {
  base = Number(prompt("Qual a base do retângulo?"))
  altura = Number(prompt("Qual a base do retângulo?"))
  const area = base * altura
  console.log(area)
  return area 

}


// EXERCÍCIO 02
function imprimeIdade(anoatual, idade) {
  anoatual = Number(prompt("Qual é o ano atual?"))
  idade = Number(prompt("Qual é sua idade?"))
  const idad = anoatual - idade
  console.log (idad)
  return idad


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
nome = prompt('Seu nome')
idade = prompt('Seu nome')
email = prompt('Seu nome')
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
cor1 = prompt('Digite sua primeira cor Preferida')
cor2 = prompt('Digite sua segunda cor Preferida')
cor3 = prompt('Digite sua terceira cor Preferida')
console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return `${string.toUpperCase()}`
}
console.log('string')


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
return (custo / valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const soma = string1 >= string2	
  return string1 >= string2	
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length-1]]=[array[array.length-1], array[0]];
  return array;

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase() === string2.toLowerCase())

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
