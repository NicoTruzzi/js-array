console.log("script caricato");

const amici = ["Marco", "Giulia", "Luca", "Sofia", "Alessandro", "Martina"];
const bloccati = ["Francesca", "Matteo", "Elena", "Davide", "Chiara", "Gabriele"];
console.log(amici);
console.log(bloccati);
console.log("");

const nome = prompt("inserisci il nome dell'amico da aggiungere");

if (bloccati.includes(nome)) {

} else {
    amici.push(nome)
}
console.log("nuova lista amici", amici);
