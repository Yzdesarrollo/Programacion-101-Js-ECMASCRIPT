
let dia = 3; // 1= lunes, 2= martes......y 0 es Domingo

switch( dia ){

    case 0:
        console.log('Es Domingo');
        break; 

    case 1:
        console.log('Es lunes');
        break; 
    
    case 2:
        console.log('Es Martes');
        break; 

    case 3:
        console.log('Es Miercoles');
        break; 

    case 4:
        console.log('Es Jueves');
        break;

    case 5:
        console.log('Es Viernes');
        break;    
    
    case 6:
         console.log('Es Sabado');
        break; 
    
    default:
        console.log('El dia ingresado no es permitido');
}