console.log("script caricato");

const atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
const punteggi = [78, 93, 86, 91, 82];
let primo = 0;
let secondo = 0;
let terzo = 0;
console.log(atleti);
console.log(punteggi);



for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > primo) {
        primo = punteggi[i];
    }

}
for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > secondo && punteggi[i] < primo) {
        secondo = punteggi[i];
    }
}

for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > terzo && punteggi[i] < secondo) {
        terzo = punteggi[i];
    }
}


for (let i = 0; i < atleti.length; i++) {
    if (primo === punteggi[i]) {
        console.log(atleti[i], "medaglia d'oro");

    }
    if (secondo === punteggi[i]) {
        console.log(atleti[i], "medaglia d'argento");

    }
    if (terzo === punteggi[i]) {
        console.log(atleti[i], "medaglia di bronzo");

    }
}