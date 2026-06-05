console.log("script caricato");

const temperature = [20, 25, 23, 30, 27, 21, 29];
let tempmax = 0;
let tempmin = 100;
let mediatemp = 0;
for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > tempmax) {
        tempmax = temperature[i];
    }
    if (temperature[i] < tempmin) {
        tempmin = temperature[i];
    }
    mediatemp = mediatemp + temperature[i];
}
console.log("la temperatura massima è", tempmax);
console.log("la temperatura minima è", tempmin);
console.log("la temperatura media è", mediatemp / temperature.length);



