
let libras = 160;
let kg = libras / 2.2046;

//Redondeando el resultado
kg *=100;
kg = Math.round(kg);
kg /= 100;


console.log(libras + ' Libras' + ' Es igual a ' + kg + ' kilogramos ');