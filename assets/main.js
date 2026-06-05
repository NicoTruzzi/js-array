console.log("script caricato");


prodotti = ["pane", "latte", "uova", "mele", "arance"]
quant = [4, 0, 10, 5, 6]

for (let i = 0; i < prodotti.length; i++) {
    if (quant[i] < 5) {
        console.log("le scorte di", prodotti[i], "sono basse", quant[i]);

    } else if (quant === 0) {
        console.log("le scote di", prodotti[i], "sono usaurite", quant[i]);

    }
}