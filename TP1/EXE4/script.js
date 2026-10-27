function somme() {
    const h1 = Number(document.getElementById("h1").value);
    const m1 = Number(document.getElementById("m1").value);
    const s1 = Number(document.getElementById("s1").value);

    const h2 = Number(document.getElementById("h2").value);
    const m2 = Number(document.getElementById("m2").value);
    const s2 = Number(document.getElementById("s2").value);

    const h3 = Number(document.getElementById("h3").value);
    const m3 = Number(document.getElementById("m3").value);
    const s3 = Number(document.getElementById("s3").value);

    const total = (h1 + h2 + h3) * 3600
                + (m1 + m2 + m3) * 60
                + s1 + s2 + s3;

    const jours = Math.floor(total / 86400);
    const heures = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secondes = total % 60;

document.getElementById("jours").value = jours;
document.getElementById("heures").value = heures;
document.getElementById("minutes").value = minutes;
document.getElementById("secondes").value = secondes;
}