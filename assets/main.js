console.log("script caricato");

const turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"]
mattina = 0;
pomeriggio = 0;
notte = 0;
console.log(turni);

for (let i = 0; i < turni.length; i++) {
    if (turni[i] === "mattina") {
        mattina++;
    } else if (turni[i] === "pomeriggio") {
        pomeriggio++;
    } else {
        notte++;
    }
}
console.log("");
console.log("nel turno di mattina lavorano", mattina, "infermieri");
console.log("nel turno di pomeriggio lavorano", pomeriggio, "infermieri");
console.log("nel turno di notte lavorano", notte, "infermieri");