// ? Contar quantas vezes se jogou os dados até que a soma deles se tornou 10.

let contadorTotal;
let contador = 0;
let contadorSome = 0;
let resultDado;
let resultPlus;

while (contador < 10) {
    let dado1 = parseInt(Math.random() * 6 + 1);
    let dado2 = parseInt(Math.random() * 6 + 1);
    contadorTotal = contador + contadorSome

    resultPlus = dado1 + dado2; //! soma
    resultDado = resultPlus % 2; //! calculo de pares

    if (resultDado == 0 && dado1 !== dado2) { // * SE for PAR
        contador++
    }
    if (!resultDado == 0) {
        continue
    }
    if(dado1 == dado2) {
        contadorSome++
    } 

    if (contador === 11) { // * Quando chegar em 10 = break
        break
    }
    console.log(`Lançamento ${contadorTotal + 1}: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Resultado = ${resultPlus}`);
}

console.log(`Total de lançamentos: ${contadorTotal + 1}`);
console.log(`Houve ${contador} resultados pares com dados de valores diferentes e ${contadorSome} dados com valores iguais.`)
