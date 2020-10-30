
// definisco i livelli
var facile = document.getElementById("livello-facile");
var medio = document.getElementById("livello-medio");
var difficile = document.getElementById("livello-difficile");

// utente sceglie un livello

// cosa succede ad ogni livello
facile.addEventListener('click',
  function (){
    // difficoltà zero (da 1 a 100)
    console.log(functionRandom(1,100));
    console.log(functionUtente(1,100,4));
  }
);

medio.addEventListener('click',
  function () {
    // difficoltà uno ( da 1 a 80)
    console.log(functionRandom(1,80));
    console.log(functionUtente(1,80,6));
  }
);

difficile.addEventListener('click',
  function (){
    // difficoltà due ( da 1 a 50)
    console.log(functionRandom(1,50));
    console.log(functionUtente(1,50,7));
  }
);
