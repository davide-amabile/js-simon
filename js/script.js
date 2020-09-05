//1.creare allert con 5 numeri
var numRdm = numRdnFrom1(1, 100, 5);
alert(numRdm);

//2.generare 5 numeri random
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

//3. chiedere 5 numeri all'utente dopo 30 secondi chiuso l'allert
setTimeout( myFunction, 30000);

function myFunction() {
// array numeri uguali
 var x = [];
// array numeri diversi
var y = [];
//4. controllo numeri inseriti
var i = 0;
while (  i < 5 ) {
  var numIns= parseInt(prompt("Inserisci un numero"));
  if ( isNaN(numIns) || numIns < 1 || numIns > 100  ) {
    alert("inserire un numero da 1 a 100");
  } else  {
    var checkStato = checkDatiIns( numRdm, numIns);
    if ( checkStato == true) {
      x.push(numIns);
      i++;
    }else {
      y.push(numIns)
      i++;
    }
  }


//6. funzione per controllare se il numero è presente nell'array
  function checkDatiIns(array, dato) {
  var check = true;
  var i = 0;
  while ( i < array.length) {
    if (array.indexOf(dato) == -1) {
      check = false;
    }
    i++;
    return check
  }
}
}

//7. verificare quanti e quali numeri hanno indovinato
console.log("Hai indovinato" + " " + x.length + " " +  "numeri:" + " " + x);
console.log("Hai sbagliato" + " " + y.length + " " +  "numeri:" + " " + y);
}


































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
