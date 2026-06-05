console.log("script caricato");

const carrozze = [2, 0, 4, 7, 12, 8];

const persone = prompt("quante persone siete?");
let posti = true;
for (let i = 0; i < carrozze.length; i++) {
    if (persone <= carrozze[i]) {
        let c = i + 1;
        console.log("la carrozza numero", c, "ha capienza sufficente");
        posti = false;
        break;
    }

}
if (posti = true) {


    console.log("non ci sono abbastanza posti nelle carrozze");

}
