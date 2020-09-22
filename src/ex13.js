function printNumbers(number) {
    if (number == 0) {

        console.log(number);
        number = number + 1;
    } else if (number <= 1000) {
        number += 1
        console.log(number);

        printNumbers(number);

    }
}

console.log(printNumbers(0))