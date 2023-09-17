function processData(input) {
    let senhaCorreta = input.trim().split('\n')[0]
    let senhaInserida = input.trim().split('\n')[1]
    let letrasFormantes = senhaCorreta.split('')
    let validacao = []

    for (let index = 0; index < senhaInserida.length; index++) {
        if(senhaInserida[index]===letrasFormantes[0]){
            letrasFormantes.shift()
            validacao.push(letrasFormantes[0])
            senhaInserida=senhaInserida.slice(index + 1)
            index=-1
        }
    }
    if(validacao.length===senhaCorreta.length){
        console.log('SIM')
    }else{
        console.log('NAO')
    }

} 