function solucao(texto) {
    let palavrasBruto = texto.split(" ")

    let palavrasTratado = []
    for(let palavra of palavrasBruto){
        if(palavra !== ""){
            palavrasTratado.push(palavra)
        }
    }console.log(palavrasTratado.length)
}