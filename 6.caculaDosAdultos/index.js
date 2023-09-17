function solucao(lista) {
    
  let menoresDeIdade = []
  let maioresDeIdade = []
  
  for(let item of lista){
      if(item <18){
        menoresDeIdade.push(item)
      }else{
        maioresDeIdade.push(item)
   }
  }
  if(maioresDeIdade.length===0){
      console.log(`CRESCA E APARECA`)
  }else{
      console.log(Math.min(...maioresDeIdade))
  }
  }