console.log("script caricato");


const studenti = ["luca", "marco", "alessia", "giovanni", "lucrezia"]
const voti = [8, 3, 6, 5, 10];

for (let i = 0; i < studenti.length; i++) {
    if (voti[i] > 5) {
        console.log("il voto di", studenti[i], "è sufficente", voti[i]);

    } else {
        console.log("il voto di", studenti[i], "è insufficente", voti[i]);
    }

}


