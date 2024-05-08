const Uno = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2023,
    km: 10000,
    combustivel: 'gasolina',
    litrosConsumidos: 625,
}

console.log(
    `O carro ${Uno.marca} ${Uno.modelo} ano ${Uno.ano} fez em média ${Uno.km / Uno.litrosConsumidos} Km/L de ${Uno.combustivel}.`
)