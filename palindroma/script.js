// Funzione per verificare se una parola è palindroma
function checkPalindrome() {
    const word = document.getElementById('wordInput').value; // Recuperiamo input utente
    const reversedWord = word.split('').reverse().join(''); // Dividiamo, invertiamo e uniamo la parola inserita
    // Restituiamo il risultato
    const result = word === reversedWord ? 'La parola è palindroma' : 'La parola non è palindroma';
    document.getElementById('palindromeResult').innerText = result;
}