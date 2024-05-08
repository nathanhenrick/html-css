let numeros = [1, 2, 5, 8, 9, 52, 6, 752, 6];
let numeros2 = [];

for (let i = 0; i < numeros.length; i++) {
    let conta = numeros[i] * 2

    // numeros2[numeros2.length] = conta
    numeros2.push(conta)

}
console.log(numeros2)
