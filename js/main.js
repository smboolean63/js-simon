// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*-------------------------
    FUNCTIONS
--------------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*-------------------------
    MAIN
--------------------------*/
const numbersHtml = document.querySelector(".numbers");

const timer = 3; // 3 secondi
const numbersRandom = [];
// genero 5 numeri casuali e li inserisco nell'array numbersRandom
while(numbersRandom.length < 5) {
    const number = getRndInteger(1, 100);
    if(!numbersRandom.includes(number)) {
        numbersRandom.push(number);
    }
}
// Visualizzare in pagina 5 numeri casuali.
numbersHtml.innerHTML = numbersRandom;
// nascondere i numeri
setTimeout(function() {
    numbersHtml.innerHTML = "";
}, (timer - 1) * 1000); // 2000

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(function() {
    const userNumbers = [];
    for(let i = 0; i < 5; i++) {
        const number = Number(prompt("Inserisci un numero"));
        userNumbers.push(number);
    }
    // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    const numbersCheck = []; // array numeri indovinati
    for(let i = 0; i < userNumbers.length; i++) {
        const number = userNumbers[i];
        // SE il numero è presente nell'array numbersRandom e NON è incluso nell'array numbersCheck, lo aggiungo all'array numbersCheck
        if(numbersRandom.includes(number) && !numbersCheck.includes(number)) {
            numbersCheck.push(number);
        }
    }
    // stampo il risultato
    if(numbersCheck.length > 0) {
        alert(`Hai indovinato ${numbersCheck.length} numeri (${numbersCheck})`);
    } else {
        alert('Sei scarso! riprova! 😅');
    }

}, timer * 1000);