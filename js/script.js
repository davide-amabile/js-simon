// creare allert con 5 numeri
var numRdm = numRdnFrom1(1, 100, 5);
console.log(numRdm);

alert(numRdm);

// generare 5 numeri random


function numRdnFrom1 (min, max, numRdn) {
  var lista = [];
  var i = 1;
  while ( i <= numRdn) {
  var numRandom =Math.floor(Math.random() * (max - min + 1) ) + min;
  if ( lista.indexOf(numRandom) === -1 ) {
    lista.push(numRandom);
  i++;
  }
}
  return lista;
}

// chiedere 5 numeri all'utente dopo 30 secondi chiuso l'allert

var numUtente = [];

var i = 0;
while ( i < 5 ) {
  var numIns= parseInt(prompt("Inserisci un numero"));
  if ( isNaN(numIns) || numIns < 1 || numIns > 100  ) {
    alert("inserire un numero da 1 a 100");
  } else {
    numUtente.push(numIns);
      i++;
  }
}
console.log(numUtente);





























// var numUtente = [];
//
//   var i= 0;
//
//   do{
//     var numCheck = [];
//     var numIns = parseInt(prompt("Inserire un numero"));
//     // controlli numeri inseriti
//     if ( isNaN(numIns) ) {
//       alert("inserire un numero da 1 a 100")
//       numCheck.splice(numIns);
//     } else {
//       numCheck.push(numIns);
//     }
//     i++;
//   } while ( i < 5);
//   console.log(numCheck);
//   console.log(numUtente);
