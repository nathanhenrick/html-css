let values = ['Nathan', 10, 30, false, [], {}, 'World', 70, 10, 20];
let division = parseInt(values.length / 2);
let cont = division - 1;
const split = values.length % 2
if (split != 0) {
    console.log(values[cont], values[division]);
} else {
    let secondCont = values.length / 2 -1
    console.log(values[secondCont])
}
