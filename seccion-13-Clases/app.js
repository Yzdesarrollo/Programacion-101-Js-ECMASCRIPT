

let carro1 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 4
};

class Carro {

    constructor(marca1, tipo1, puertas){

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

        this.creadoEn = 'Hoy';

    }
}

let carro2 = new Carro('Mazda','Corola', 2);

console.log(carro1);
console.log(carro2);