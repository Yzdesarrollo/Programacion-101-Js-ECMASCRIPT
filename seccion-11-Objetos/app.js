

function DescribirPersona( p ){

    //console.log('fernando tiene una edad de 32 y mide 1.79');
    console.log(`${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura }`);
}


let persona = {
    nombre: 'Fernando',
    edad: 32,
    estatura: 1.79
}

DescribirPersona(persona);


