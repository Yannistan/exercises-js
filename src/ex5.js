function showStars(nbStars) {

    let char = "*";
    let i = 0;
    for (let i = 0; i < nbStars; i++) {
        console.log(char);
        char += "*";
    }

}

console.log(showStars(3))