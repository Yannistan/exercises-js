function calc(char, n1, n2) {
    if (char == "+") {
        return n1 + n2;
    } else if (char == "-") {

        return n1 - n2;
    } else if (char == "*") {
        return n1 * n2;
    } else if (char == "/") {
        return n1 / n2;
    }

}
let nb1 = calc('+', 10, 11);
console.log(nb1);
let nb2 = calc('-', 6, 4);
console.log(nb2);
let nb3 = calc('*', 4, 5);
console.log(nb3);
let nb4 = calc('/', 10, 2);
console.log(nb4);