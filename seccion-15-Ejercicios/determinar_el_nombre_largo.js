

function masLargo( arreglo ){

    let nombreLargo = '';

    for(let i = 0; i < arreglo.length ; i++){

        let nombre = arreglo[i];

         if(nombre.length > nombreLargo.length ){

            nombreLargo = nombre;

         }
    }

    return nombreLargo;

}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', ' Xavier'];

let heroeLargo = masLargo(heroes);
console.log(heroeLargo);