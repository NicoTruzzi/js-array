console.log("script caricato");

const partecipanti = ["Marco", "Giulia", "Luca", "Sofia", "Alessandro", "Martina"];
console.log(partecipanti);

const ritiro = prompt("inserisci il nome del partecipante ritirato")
partecipanti.splice(partecipanti.indexOf(ritiro), 1)
console.log(partecipanti);
