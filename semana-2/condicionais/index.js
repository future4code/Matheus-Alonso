/* Tente responder os exercícios dessa seção sem executar o código.
 Se ficar muito difícil, pode rodar no seu computador 
 **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
  

    a) Explique o que o código faz. Qual o teste que ele realiza? 

    Resposta: Ele divide o numero do usuario e verifica se é igual a 0 se for igual a 0 imprimi
    passou no teste. caso não der 0 ele vai dizer que não passou no teste.
---------------------------------------------------------------------------------------------------
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    
    Resposta: se o resultado for 0
----------------------------------------------------------------------------------------------

    c) Para que tipos de números a mensagem é "Não passou no teste"? 
    
    Resposta: Qualquer numero que não seja 0

---------------------------------------------------------------------

2. O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    a) Para que serve o código acima?
    
    Resposta: Automotiza as frutas com os preços delas, reusmindo vai imprimir qual fruta escolheu
    e qual o valor delas.
----------------------------------------------------------------------------------
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
    Resposta: 2.25
------------------------------------------------------------------------------------
    c) Considere que um usuário queira comprar uma `Pêra`, 
    qual seria a mensagem impressa no console se retirássemos o `break` que está logo 
    acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    
    Resposta: 5.5 e 5
---------------------------------------------------------------------------------------


3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    a) O que a primeira linha está fazendo?
    
    Resposta: pedindo para o usuario digitar o primeiro numero
-------------------------------------------------------------------------------------
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    
    Resposta: Se ele digitar 10 vai aparecer esse numero passou no teste, mas caso ele digite -10 vai aparecer que essa mensagem
    é secreta.
---------------------------------------------------------------------------------------
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    
    Resposta: Sim na mensagem não foi colocado em escopo. o correto seria ("Essa mensagem é secreta!!!") 
    
    ------------------------------------------------------------------------------------
    */
/* 
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
    se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */


 /*    
        const dizSePodeDirigir = (idade) => {
        if(idade >= 18){
          console.log('Pode dirigir!')
        } else {
          console.log('Não pode dirigir')
        }
    }
    const pode = Number(prompt('Qual a sua idade? '))
    dizSePodeDirigir(pode)
 */
/* 
    2- Agora faça um programa que verifica que turno do dia um aluno estuda. 
    Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
     Utilize o bloco if/else */

/*      
const turno = prompt("Qual período você estuda? Digite ( M )-Matutino, ( V )-Vespertino ou ( N )-Noturno").toUpperCase();
     if (turno === "M") {
         console.log("Bom dia!");
         } else if (turno === "V") {
             console.log("Boa Tarde!")
         } else if (turno === "N") {
             console.log("Boa noite!")
         } else {
             console.log("Digite período vávido como mostrado dentro dos parênteses")
     }

      */

/* 
3-Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`) */

/* 
const dizturno = (turno) => {
  switch(turno){
    case 'M':
      console.log('Bom Dia!')
      break
    case 'V':
      console.log('Boa Tarde!')
      break
    case 'N':
      console.log('Boa Noite!')
      break
    default:
      console.log('Escolha um turno valido!')


  }
}

const turnoUsuario = prompt("Qual período você estuda? Digite ( M )-Matutino, ( V )-Vespertino ou ( N )-Noturno").toUpperCase();
dizturno(turnoUsuario) */

/* ------------------------------------------------------------------------------------------------ 

4-Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero 
fantasia e se o ingresso está abaixo de 15 reais. Faça um código que 
pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o 
preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */



/* 
  const vamosAssistir = (generoFilme, valorIngresso) => {
  if(generoFilme === "Fantasia" && valorIngresso <= 15){
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme :(")
}
}
const qualGeneroFilme = prompt("Quais desses Gêneros de filme quer assistir Fantasia', Drama ou Suspense?")
const quantoValorIngresso = Number(prompt("Quanto pode pagar no valor do ingresso? Digite de 5 à 30"))
vamosAssistir(qualGeneroFilme, quantoValorIngresso);
 */