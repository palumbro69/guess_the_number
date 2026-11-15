let numeroSegreto, tentativi, rimasti;

function istruzioni() {
    boxIstruzioni.classList.toggle("d-none");
}

function gioca() {
    numeroSegreto = Math.floor(Math.random() * 101);
    tentativi = [];
    rimasti = 7;
    boxGioco.classList.remove("d-none");
    boxGioco.className = "container bg-white border p-4 my-3 rounded";
    testoInput.value = "";
    msg.classList.add("d-none");
    tentativiRimasti.innerHTML = rimasti;
    suggerimenti.innerHTML = "i";
    numeriInseriti.innerHTML = "-";
}

function invia() {
    if (testoInput.value === "") {
        suggerimenti.innerHTML = "Inserisci un numero valido";
        return;
    }

    let n = Number(testoInput.value);

    if (n < 0 || n > 100 || isNaN(n)) {
        suggerimenti.innerHTML = "Inserisci un numero valido";
        return;
    }

    tentativi.push(n);
    rimasti--;
    tentativiRimasti.innerHTML = rimasti;
    numeriInseriti.innerHTML = tentativi.join(" - ") + " -";

    if (n === numeroSegreto) {
        boxGioco.className = " risposta container bg-success text-white border p-4 my-3 rounded";
        msg.classList.remove("d-none");
        msg.innerHTML = "YOU WIN";
        return;
    }

    if (rimasti === 0) {
        boxGioco.className = " risposta container bg-danger text-white border p-4 my-3 rounded";
        msg.classList.remove("d-none");
        msg.innerHTML = "YOU LOSE - il numero era " + numeroSegreto;
        return;
    }

    if (n < numeroSegreto) {
        suggerimenti.innerHTML = "Il numero che cerchi è più grande";
    } else {
        suggerimenti.innerHTML = "Il numero che cerchi è più piccolo";
    }
}