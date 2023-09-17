function processData(input) {
    const linhasBrutas = input.trim().split("\n");
    const numeroDeCadeiras = parseInt(linhasBrutas[0]);
    let maiorDistancia = 0;

    

    for (let i = 1; i <= numeroDeCadeiras; i++) {
        const [x1, y1] = linhasBrutas[i].split(" ").map(Number);

        for (let j = i + 1; j <= numeroDeCadeiras; j++) {
            const [x2, y2] = linhasBrutas[j].split(" ").map(Number);
            const distancia = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia.toFixed(6))
}