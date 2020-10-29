// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// Il computer deve generare 16 numeri casuali tra 1 e 100: creo ciclo di 16 ripetizioni

var arrayNumPc = [];

for (var i = 0; arrayNumPc.length < 16; i++) {
  var numPc = arrayNumPc[i];
  numPc = getRandomIntInclusive(1,100);
  // I numeri non possono essere duplicati (i 16 numeri devono essere diversi tra loro)
  if(arrayNumPc.indexOf(numPc) === -1) {
    arrayNumPc.push(numPc);
  }
}
console.log(arrayNumPc);

// CICLO

var arrayNumUtente = [];


// chiedere all’utente (100 - 16) (3 prova) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var i = 0;
while (i < 3) {

  var numUtente = arrayNumUtente[i];
  numUtente = parseInt(prompt("inserisci un numero tra 1 e 100"));
  // numeri utente devono essere diversi tra loro
  if(arrayNumUtente.includes(numUtente)){
    alert("hai già inserito questo numero!");
    // se numero utente è all'interno di array computer: game over
  }else if(arrayNumPc.includes(numUtente)){
      // outuput: game over + numero di volte che utente ha inserito numero diverso da pc
      console.log("game over", arrayNumUtente.length);
    break;
  }else{
    arrayNumUtente.push(numUtente);
  }

  i++;
}

console.log(arrayNumUtente);

// se numero utente diverso da numeri computer : utente inserisce un altro numero


// se utente raggiunge limite di 84 numeri : hai vinto









// FUNZIONI UTILI

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  }
