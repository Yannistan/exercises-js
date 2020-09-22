function makeUnique(array) {
    let arrayUnique = [];
    for (let i = 0; i < array.length; i++) {
        if (!arrayUnique.includes(array[i])) {
            arrayUnique.push(array[i]);
        }
    }

    return arrayUnique.sort((x, y) => x - y);
}

console.log(makeUnique([6, 2, 1, 3, 2, 3, 5, 7, 5, 1]))