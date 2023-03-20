const km = parseInt(prompt("Quanti chilometri vuoi percorrere?", 86));
console.log(km);

const anni = parseInt(prompt("Quani anni hai?", 67));
console.log(anni);

//PREZZO COMPLETO
let prezzocompleto = km * 0.21;
console.warn(prezzocompleto);

//CALCOLO EVENTUALE SCONTO IN BASE ALL'ETÀ
if (anni < 18) {
  prezzocompleto = prezzocompleto - (prezzocompleto * 0.2);
}else if (anni > 65) {
  prezzocompleto = prezzocompleto - (prezzocompleto * 0.4);
}

console.log(prezzocompleto);

let prezzofinale = Math.round(prezzocompleto * 100) / 100


// LET da collegare a HTML
let outputStr = `
  Il prezzo del tuo biglietto è ${prezzofinale}
`


// COLLEGAMENTO a HTML 
document.getElementById("output").innerHTML = outputStr;