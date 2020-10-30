
// definisco i livelli
var facile = document.getElementById("livello-facile");
var medio = document.getElementById("livello-medio");
var difficile = document.getElementById("livello-difficile");

// utente sceglie un livello

// cosa succede ad ogni livello
facile.addEventListener('click',
  function (){
    // azzero variabili per nuova giocata
    arrayNumUtente = [];
    arrayNumPc = [];
    // difficoltà zero (da 1 a 100)
    console.log(functionRandom(1,100));
    console.log(functionUtente(1,100,84));
  }
);

medio.addEventListener('click',
  function () {
    // azzero variabili per nuova giocata
    arrayNumUtente = [];
    arrayNumPc = [];
    // difficoltà uno ( da 1 a 80)
    console.log(functionRandom(1,80));
    console.log(functionUtente(1,80,64));
  }
);

difficile.addEventListener('click',
  function (){
    // azzero variabili per nuova giocata
    arrayNumUtente = [];
    arrayNumPc = [];
    // difficoltà due ( da 1 a 50)
    console.log(functionRandom(1,50));
    console.log(functionUtente(1,50,34));
  }
);
