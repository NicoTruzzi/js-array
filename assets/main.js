console.log("script caricato");

const targhe = ["ZT918LM", "PV847RC", "DK126SJ", "XN450WF", "HB972QA", "TU318ME", "GL605ZX", "WR289CN", "FS741JP", "KC534LD", "NM860RV", "BQ217XT", "VD493HS", "JP708MK", "LX152FG"];
console.log(targhe);

const targaUt = prompt("inserisci la targa della tua macchina");

console.log("la tua macchina si trova al parcheggio numerato N", targhe.indexOf(targaUt));
