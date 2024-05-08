function ehBissexto(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
console.log(ehBissexto(2000))