function showStars(nbStars) {

    let char = "*";

    for (let i = 0; i < nbStars; i++) {
        console.log(char);
        char += "*";
    }

}

console.log(showStars(4))