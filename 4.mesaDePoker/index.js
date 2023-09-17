function solucao(min, max, valores) {
    valoresPermitidos = []
    for(let item of valores){
        if(item >= min && item <= max){
            valoresPermitidos.push(item)
        }
    }console.log(valoresPermitidos) 
  }