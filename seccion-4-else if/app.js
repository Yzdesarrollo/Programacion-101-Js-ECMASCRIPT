
/*  

    Crear un algoritmo que permita determinar la calificacion en letras
    de un alumno

    Si la nota se encuentra entre 90 a 100 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F 

    let nota = 70;
    let notaletra = '';

    if ( nota >= 90 ){
        notaletra = 'A';
    } else if( nota >= 80 ){
        notaletra = 'B';
    } else if( nota >= 70 ){
        notaletra = 'C';
    } else if( nota >= 60 ){
        notaletra = 'D';
    } else {
        notaletra = 'F';
    }

*/

let nota = 92;

if (nota >= 90 || nota >= 100 ) {
    
console.log(nota + ' es igual a A');
}
else if(nota >= 70 || nota >= 79){
    console.log(nota + ' es igual a B');
}
else if(nota >= 60 || nota >= 69){
    console.log(nota + ' es igual a C');
}
else{
    console.log(nota + ' es igual a F');
}