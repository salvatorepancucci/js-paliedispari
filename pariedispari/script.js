// Funzione per generare un numero random da 1 a 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per verificare se un numero è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

// Funzione principale per il gioco pari e dispari
function playEvenOdd() {
    // Recuperiamo input utente
    const userChoice = document.getElementById('choice').value;
    const userNumber = parseInt(document.getElementById('numberInput').value);
    const computerNumber = getRandomNumber(); // Assegniamo numbero random al computer tramite la prima funzione
    
}