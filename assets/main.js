console.log("script caricato");

const pazienti = ["Marco", "Giulia", "Luca", "Sofia", "Alessandro", "Martina"];
console.log(pazienti);
console.log("");

const chiamata = prompt("premi invio per chiamare il primo ed eliminarlo dalla lista");
pazienti.shift()
console.log("nuova lista pazienti", pazienti);



