function solucao(numeros) {
   somaDosNumeros = 0
   for(let numero of numeros){
    somaDosNumeros+=numero
   }
 if(somaDosNumeros>numeros.length){
    while(somaDosNumeros>numeros.length){
        somaDosNumeros-=numeros.length
    }console.log(somaDosNumeros)
 }else{
    console.log(somaDosNumeros)
 }
}