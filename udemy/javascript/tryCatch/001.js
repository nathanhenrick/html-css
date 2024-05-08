function areaRetangulo(b, h) {
    if (typeof b !== 'number' || typeof h !== 'number') {
        throw Error("Por favor, insira apenas números.")
    }
    return b * h
}
areaRetangulo(5, 'n')