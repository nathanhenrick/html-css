// ? Contar quantas vezes se jogou os dados até que a soma deles se tornou 10.

let contador = 0;
let resultDado;
let resultPlus;

while (contador < 10) {
    let dado1 = parseInt(Math.random() * 6 + 1);
    let dado2 = parseInt(Math.random() * 6 + 1);

    resultPlus = dado1 + dado2; //! soma
    resultDado = resultPlus % 2; //! calculo de pares

    if (resultDado == 0) { // * SE for PAR
        contador++
    }
    if (contador === 11) { // * Quando chegar em 10 = break
        break
    }
    console.log(`Lançamento ${contador}: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Resultado = ${resultPlus}`);
}

console.log(`Total de lançamentos: ${contador}`);
