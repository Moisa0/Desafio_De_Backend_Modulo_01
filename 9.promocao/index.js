function solucao(precos) {
    valorMenosDeTres = 0
  valorMaisDeTres = 0
      if(precos.length<3){
      
      for(let item of precos){
        valorMenosDeTres += item
      }console.log(valorMenosDeTres)
    }else{
   
      for (var i = 0; i < precos.length; i++) {
        valorMaisDeTres += precos[i]
      }console.log(valorMaisDeTres - Math.min(...precos)*0.5)
    }
    
  }