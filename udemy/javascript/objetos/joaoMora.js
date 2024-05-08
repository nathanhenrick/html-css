const endereco = {
    rua: "Rua das Tulipas",
    numero: 302
};
const pessoa = {
    nome: 'João',
    sobrenome: 'Fagundes',
    endereco
};
//* console.log(`${pessoa.nome} ${pessoa.sobrenome} mora na ${pessoa.endereco.rua}, ${pessoa.endereco.numero}`);

for (properties in pessoa) { //! Imaginar que "PROPERTIES IN PESSOA" está exatamente na mesma ordem de "NOME: 'João'"
    console.log(properties);         //? Pega a propriedade dentro de "pessoa"
    console.log(pessoa[properties]); //? Pega o valor dentro das propriedades de "pessoa"
}