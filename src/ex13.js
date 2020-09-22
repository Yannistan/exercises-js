function printNumbers(number) {
    if (number == 0) {
        console.log(number)
    }
    if (number < 1000) {
        number += 1

        if (number <= 1000) console.log(number)
        if (number < 1000) printNumbers(number)
    }
}
console.log(printNumbers(0))