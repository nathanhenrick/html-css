function calcularMedia() {
    let somar = 0
    let qtd = arguments.length;
    if (qtd === 0) {
        throw Error('Insira algum número')
    } else {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'number') {
                somar += arguments[i]
            } else {
                throw Error('ERRO, insira apenas números')
            }
        }
    }
    const media = somar / arguments.length
    return media
}
console.log(calcularMedia(4, 6, 2)) //* Média = 5
