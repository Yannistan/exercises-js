function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) {
    const roues_mono = 1;
    const roues_moto = 2;
    const roues_voiture = 4;
    const roues_limo = 6;
    return ((nb_monocycle * roues_mono) + (nb_moto * roues_moto) + (nb_voiture * roues_voiture) + (nb_limousine * roues_limo));
}

console.log(countWheels(10, 20, 7, 2));
console.log(countWheels(2, 3, 4, 5));