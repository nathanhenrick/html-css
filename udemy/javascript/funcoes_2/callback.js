function callback() {
    let somar = 0
    for (let i = 0; i < arguments.length; i++) {
        somar += arguments[i]
    }
    return somar
};

console.log(callback(5, 9, 8, 5, 5, 3, 10, 5));