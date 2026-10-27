function trier(nombres) {
    nombres.sort(function(a, b) {
        return a - b;
    });

    return nombres;
}

function afficher() {
    const nombres = [8, 3, 12, 1];

    document.getElementById("resultat").textContent =
        "Tableau trié : " + trier(nombres).join(", ");
}