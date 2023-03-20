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
  Il prezzo del tuo biglietto è di &euro; <span>${prezzofinale}</span> <br>
  Mostra il tuo biglietto al controllore tramite questo QR code 
  <div class="card mt-3" style="width: 18rem;">
  <img src="JS/frame (1).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Biglietto n#</h5>
    <p class="card-text">Partenza da </p>
    <p class="card-text">Arrivo a </p>
    <p class="card-text">Totale km ${km} </p>
  </div>
</div>
`


// COLLEGAMENTO a HTML 
document.getElementById("output").innerHTML = outputStr;