console.log("script caricato");

const vip = ["Alessandro", "Giulia", "Lorenzo", "Sofia", "Matteo", "Aurora", "Francesco", "Ginevra", "Leonardo", "Martina", "Tommaso", "Chiara", "Riccardo", "Alice", "Davide"];
const standard = ["Emma", "Federico", "Beatrice", "Andrea", "Vittoria", "Marco", "Greta", "Gabriele", "Elena", "Simone", "Gaia", "Niccolò", "Noemi", "Filippo", "Camilla"];
let presente = false;
console.log("senza funzione js");
console.log("");
const nome = prompt("quale è il tuo nome?");
for (let i = 0; i < vip.length; i++) {
    if (nome === vip[i]) {
        console.log("sei nella lista VIP", nome);
        presente = true;
        break;
    }
}
for (let i = 0; i < standard.length; i++) {
    if (nome === standard[i]) {
        console.log("sei nella lista STANDARD", nome);
        presente = true;
        break;
    }
}
if (presente === false) {
    console.log("non sei presente nelle liste vip/standard");
}

console.log("");
console.log("con funzioni js");
console.log("");
if (vip.includes(nome)) {
    console.log("sei nella lista VIP", nome);

} else if (standard.includes(nome)) {
    console.log("sei nella lista STANDARD", nome);
} else {
    console.log("non sei presente nelle liste vip/standard", nome);

}

