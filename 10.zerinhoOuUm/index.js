function solucao(jogadores) {

  let soma = 0
  for(let jogador of jogadores){
    soma += jogador.jogada
  } 
  
  if(soma===jogadores.length-1){
    for(let jogador of jogadores){
      if(jogador.jogada===0){
        console.log(jogador.nome)
      }
    }
  }else if(soma===1){
    for(let jogador of jogadores){
      if(jogador.jogada===1){
        console.log(jogador.nome)
      }
    }
  }else{
    console.log('NINGUEM')
  }
  }