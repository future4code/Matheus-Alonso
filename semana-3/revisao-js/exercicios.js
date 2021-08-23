// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length

}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  arrayFiltrado = array.filter((valor) => valor % 2 === 0)
  return arrayFiltrado
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  arrayFiltrado = array.filter((valor) => valor % 2 === 0)
  for (i = 0; i <  arrayFiltrado.length; i++)
  arrayFiltrado[i] = arrayFiltrado[i] * arrayFiltrado[i]
  return arrayFiltrado

  }


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = 0
for (i = 0; i < array.length; i++)
if(maiorNumero < array[i]){
  maiorNumero = array[i]
}
 return maiorNumero
  }



// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {

    maiorNumero = num1
    menorNumero = num2

  } else {

    maiorNumero = num2
    menorNumero = num1

  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  }

}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const novoArray = []
  for (let i = 0; novoArray.length < n; i++) {
    if (i % 2 == 0) {
      novoArray.push(i)
    }
  }
  return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoB && ladoB === ladoC) {
    return 'Equilátero'
  } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
    return 'Isósceles'
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoC !== ladoB) {
    return 'Escaleno'
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let menor = Infinity
  let maior = - Infinity
  let segundoMenor = Infinity
  let segundoMaior = - Infinity
  let novoArray = []

  for (num of array) {
    if (num < menor) {
      menor = num
    }
    if (num > maior) {
      maior = num
    }
  }

  for (num of array) {
    if (num < segundoMenor && num !== menor) {
      segundoMenor = num
    }
    if (num > segundoMaior && num !== maior) {
      segundoMaior = num
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let = filme
  const dadosDoFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']   
  }
 return`Venha assistir ao filme ${dadosDoFilme.nome}, de ${dadosDoFilme.ano}, dirigido por ${dadosDoFilme.diretor} e estrelado por ${dadosDoFilme.atores}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let = pessoa
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
 }
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoaAutorizada = pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60 ) {
       return true
    }
    return false
 })
 return pessoaAutorizada
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoaNaoAutorizada = pessoas.filter((pessoa) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60 ) {
       return false
    }
    return true
 })
 return pessoaNaoAutorizada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
const saldoTotalAtualizado = contas.map((conta)=>{         
  let comprasTotal=0         
  for (let i=0; i< conta.compras.length; i++)        
       comprasTotal+=conta.compras[i]        
       return {...conta, saldoTotal: 
        conta.saldoTotal-comprasTotal, compras: []}     })          
        return saldoTotalAtualizado

       }


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let newArray = consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1
    }
    if (a.nome < b.nome) {
      return -1
    }

    return 0
  })
  return newArray
}




// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let = consultas
  let newArray = consultas.sort(function (a, b) {
    let arrayDataA = a.dataDaConsulta.split("/")
    let dataA = new Date(arrayDataA[2], arrayDataA[1], arrayDataA[0]).getTime()
    let arrayDataB = b.dataDaConsulta.split("/")
    let dataB = new Date(arrayDataB[2], arrayDataB[1], arrayDataB[0]).getTime()
    if (dataA > dataB) {
      return 1
    }
    if (dataA < dataB) {
      return -1
    }

    return 0
  })
  return newArray
}