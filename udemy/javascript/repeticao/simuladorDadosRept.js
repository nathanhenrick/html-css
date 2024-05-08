let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)

let contador = 1

while (dado1 !== dado2) {
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}
console.log(`Os dados foram jogados ${contador}, os números foi ${dado1}. `)