// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

document.getElementById('palindromGame').addEventListener('click', 
    function(){
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
    }
);




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

document.getElementById('pariOdispariGame').addEventListener('click', 
    function(){
        
        // 0) creo funzione
        function pariDispari(uChoose, uNum){
            // genero un numero casuale da 1 a 5
            var cpuNum = parseInt(Math.random() * 5 + 1);
            // sommo il numero utente con quello cpu
            var risultato =+ uNum + cpuNum;
            // stampo in console gli input
            console.log('cpu: ' + cpuNum);
            console.log('utente: ' + uNum + " " + uChoose);
            console.log('risultato: ' + risultato);
            // verifico se l'utente ha vinto
            if(uChoose == "pari" && risultato %2 == 0){
                return true;
            } else if (uChoose == "dispari" && risultato %2 !== 0){
                return true;
            } else {
                return false;
            }
        };

        // 1) chiedo all'utente i dati
        var uParDis;
        while (uParDis !== "pari" || uParDis !== "dispari"){
            uParDis = prompt('Scegli pari o dispari');
        };
        var uNum = prompt('scegli un numero da 1 a 5');

        // 2) richiamo la fuzione inviandogli i dati dell'utente
        var ris = pariDispari(uParDis, uNum);
        console.log(ris);

        // 3) comunico il vincitore
        if (ris){
            alert('Complimenti!! hai vinto!!!')
        } else {
            alert('Mi dispiace, hai perso.')
        }

    }
);