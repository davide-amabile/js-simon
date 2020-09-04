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
