let numeros = [1, 5, 7, 3, 9, 2, 4, 8, 6, 10]; //*1, 5, 7, 3, 9 = 25
let numerosImpares;
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    numerosImpares = numeros[i] % 2;
    if (numerosImpares !== 0) {
        soma += numeros[i]
    }
}
console.log(soma)