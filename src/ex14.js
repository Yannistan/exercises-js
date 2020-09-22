function findprix(somme, code) {
    let prix;
    if (code == 1) {
        prix = 0.50;
    } else if (code == 2) {
        prix = 1.00;
    } else if (code == 3) {
        prix = 2.00;
    } else if (code == 4) {
        prix = 3.00;
    }
    return prix;
}

function accept_somme(somme, code) {

    if (somme >= findprix(somme, code))
        return true;
    else return false;
}

function rendre_monnaie(somme, code) {
    console.log(accept_somme(somme, code));
    if (accept_somme(somme, code) == true) {
        let arendre;
        arendre = somme - findprix(somme, code);
        return `Le montant à rendre est ${arendre} euros`;
    } else {
        return "Achat non effectué";
    }
}


console.log(rendre_monnaie(30, 4));
console.log(rendre_monnaie(2, 4));
console.log(rendre_monnaie(3, 4));