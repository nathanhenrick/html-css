const arr = [10, true, 'Nathan', 20, false, 50, 15]; //* total = 95; length = 7
let soma = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        soma += arr[i]
    }
}
console.log(soma)