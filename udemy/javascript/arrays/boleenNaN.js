let arr = [5, 8, 9, 3, 10, 20, null]; //? "Achou algum NaN, null ou undefined?"
let find = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
        find = true
        break
    }
}
console.log(find)