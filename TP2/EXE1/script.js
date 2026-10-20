function initialisr() {
    document.getElementById("qcm").reset();
}

function afficher() {
     const fenetre = window.open("", "", "width=650,height=500");

    fenetre.document.write(`
        <h1>Corrigé du QCM</h1>

        <p>1. Quels pays se trouvent en Europe ?</p>

        <u style="color: green;">France</u><br>
        <u style="color: green;">Allemagne</u><br>
        <u style="color: red ;" >Maroc</u><br>
        <u style="color: green;">Espagne</u><br>

        <p>2.Quels animaux sont des mamnifères?</p>
        <u style="color: red;">Requin</u><br>
        <u style="color: green;">Chat</u><br>
        <u style="color: green;">Bleine</u><br>

        <p>3.Quels sont les languages utilisés dans le développement web?</p>
        <u style="color: green;">Html</u><br>
        <u style="color: green;">CSS</u><br>
        <u style="color: green;">Python</u><br>
        <u style="color: green;">JavaScript</u><br>

        <p>4.Quelle est la capitale de la France?</p>
        <u style="color: red;">Lyon</u><br>
        <u style="color: red;">Marseille</u><br>
        <u style="color: green;">Paris</u><br>
        <u style="color: red;">Bordeaux</u><br>

        <p>5.Combien de jours compte une semaine ?</p>
        <u style="color:red;">5 jours</u><br>
        <u style="color:red;">6 jours</u><br>
        <u style="color:green;">7 jours</u><br>
        <u style="color:red;">8 jours</u><br>

    `);

    fenetre.document.close();
}

function resultat() {
    const fenetre = window.open("", "", "width=450,height=250");
    const france = document.getElementById("France").checked;
    const allemagne = document.getElementById("Allemagne").checked;
    const maroc = document.getElementById("Maroc").checked;
    const espagne = document.getElementById("Espagne").checked;

    if (france && allemagne && !maroc && espagne) {
        fenetre.document.write("<p>Question 1 : correcte</p>");
    } else {
        fenetre.document.write("<p>Question 1 : incorrecte</p>");
    }

    const requin = document.getElementById("Requin").checked;
    const chat = document.getElementById("Chat").checked;
    const bleine = document.getElementById("Bleine").checked;

    if (!requin && chat && bleine) {
        fenetre.document.write("<p>Question 2 : correcte</p>");
    } else {
        fenetre.document.write("<p>Question 2 : incorrecte</p>");
    }

    const html = document.getElementById("Html").checked;
    const css = document.getElementById("CSS").checked;
    const python = document.getElementById("Python").checked;
    const javascript = document.getElementById("JavaScript").checked;

    if (html && css && python && javascript) {
        fenetre.document.write("<p>Question 3 : correcte</p>");
    } else {
        fenetre.document.write("<p>Question 3 : incorrecte</p>");
    }

    const paris = document.getElementById("Paris").checked;
    const lyon = document.getElementById("Lyon").checked;
    const marseille = document.getElementById("Marseille").checked;
    const bordeaux = document.getElementById("Bordeaux").checked;

    if (paris) {
        fenetre.document.write("<p>Question 4 : correcte</p>");
    } else {
        fenetre.document.write("<p>Question 4 : incorrecte</p>");
    }

    const cinqjours = document.getElementById("5jours").checked;
    const sixjours = document.getElementById("6jours").checked;
    const septjours = document.getElementById("7jours").checked;
    const huitjours = document.getElementById("8jours").checked;

    if (septjours) {
        fenetre.document.write("<p>Question 5 : correcte</p>");
    } else {
        fenetre.document.write("<p>Question 5 : incorrecte</p>");
    }
    

    fenetre.document.close();
}
