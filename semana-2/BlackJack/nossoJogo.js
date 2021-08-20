/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas Vindas ao Jogo de BlackJack!!")

if(confirm("Vamos iniciar a Partida?")) {
	console.log("Partida Iniciada")
   console.log("Bem Vindos Ao Jogo!!")
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação:  ${carta1Usuario.valor+carta2Usuario.valor} `)
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto}  - pontuação:  ${carta1Computador.valor+carta2Computador.valor} `)

   if (pontuacaoUsuario === pontuacaoComputador){
      console.log("O jogo empatou")
   
   } else if (pontuacaoUsuario > pontuacaoComputador)
   console.log("Você venceu!")

} else if (pontuacaoUsuario < pontuacaoComputador)
   console.log("Computador Venceu!")

else {
   console.log("O Jogo acabou!")
}
