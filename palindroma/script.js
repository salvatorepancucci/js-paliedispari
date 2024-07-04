// // Funzione per verificare se una parola è palindroma
// function checkPalindrome() {
//     const word = document.getElementById('wordInput').value; // Recuperiamo input utente
//     const reversedWord = word.split('').reverse().join(''); // Dividiamo, invertiamo e uniamo la parola inserita
//     // Restituiamo il risultato
//     const result = word === reversedWord ? 'La parola è palindroma' : 'La parola non è palindroma'; // ? Operatore ternario applicato che funge da condizione if-else; trovato nella documentazione :)))
//     document.getElementById('palindromeResult').innerText = result;
// }

// For loop Limited Edition
// Funzione per verificare se una parola è palindroma
function checkPalindrome() {
    const word = document.getElementById('wordInput').value; // Recuperiamo input utente
    let reversedWord = '';
    // Usiamo un ciclo for per invertire la parola
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    } //Thanks to Fabri's livecoding ;P
    // Restituiamo il risultato
    const result = word === reversedWord ? 'La parola è palindroma' : 'La parola non è palindroma'; // ? Operatore ternario applicato che funge da condizione if-else; trovato nella documentazione :)))
    document.getElementById('palindromeResult').innerText = result;
}