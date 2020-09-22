function distributeur(somme, code) {

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



    if (somme >= prix) {
        let arendre;
        arendre = somme - prix;
        return arendre;

    } else {
        console.log("Achat non effectué");
    }
}



console.log(distributeur(30, 4));