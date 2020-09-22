function distributeur(somme, code) {
    const findprix = (code) => {
        let prix = 0;
        if (code == 1) {
            prix = 0.50;
        } else if (code == 2) {
            prix == 1.00;
        } else if (code == 3) {
            prix == 2.00;
        } else {
            prix == 3.00;
        }
        return prix;
    }
    const accept = (somme, code) => {
        findprix(code);

        if (somme >= findprix(code)) {
            return true;
        } else
            return false;
    }



    if (accept(somme, code) == true) {
        let arendre;
        arendre = somme - findprix(code);
        return arendre;
    } else {
        console.log("Achat non effectué")
    }

}

console.log(distributeur(30, 4));