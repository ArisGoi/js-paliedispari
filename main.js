// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 0) la funzione scompone una parola, la inverte e controlla se è palindroma; restituisce true o false
function isPalindrom(parola){
    var palindrom = "";

    for (i = parola.length - 1; i >= 0; i--){
        palindrom += parola[i];
    };

    if (palindrom == parola){
        return true
    }
    return false
}

// 1) chiedo all'utente una parola
var parolaUtente = prompt('inserisci una parola');

// 2) attivo la funzione con la parola inserita e la salvo in una variabile
var risultato = isPalindrom(parolaUtente);

// 3) informo l'utente del risultato
if (risultato){
    alert('La parola ' + parolaUtente + ' è palindroma')
} else {
    alert('La parola ' + parolaUtente + ' NON è palindroma')
}




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.