function solucao(min, km) {
    let valorTotalMin = 0
    let valorTotalKm = 0
    
    if(min<=20){
        valorTotalMin = min*50
    }else{
        valorTotalMin = 1000 + (min-20)*30
    }
    if(km<=10){
        valorTotalKm = km*70
    }else{
        valorTotalKm = 700 + (km-10)*50
    }

console.log(Math.floor(valorTotalKm + valorTotalMin))
}