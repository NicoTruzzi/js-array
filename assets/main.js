console.log("script caricato");

const menu = ["piatto 1", "piatto 2", "piatto 3", "piatto 4"];
const allergeni = [
    ["arachidi", "miele"],
    ["uova", "senape", "pesce"],
    ["crostacei"],
    ["grano", "sedano", "nocciole", "pistacchi"]
];
console.log(menu);
console.log(allergeni);
console.log("");
let piatto = prompt("scegli un piatto");

let allergene = prompt("scegli un allergene");
for (let i = 0; i < menu.length; i++) {
    if (piatto === menu[i]) {
        for (let j = 0; j < allergeni[i].length; j++) {
            if (allergeni[j].includes(allergene)) {
                console.log(allergene, "è nella lista degli allergeni del piatto scelto");

            }
        }

    }
}


