function printNumbers(number) {
    if (number == 0) {

        console.log(number);

    }
    if (number < 1000) {
        number += 1;
        console.log(number);

        printNumbers(number);
    }

}

console.log(printNumbers(0))