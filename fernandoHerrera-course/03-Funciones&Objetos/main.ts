//FUNCIONES BASICAS
let heroe:string = 'Flash';

function imprime_heroe(){
    return heroe;
}

let activar_batisenal = function():string{
    return 'Batisenal Activada';
}
console.log(imprime_heroe());
console.log(activar_batisenal());

//PARAMETROS OBLIGATORIOS
function nombreCompleto( nombre:string, apellido:string):string{
    return nombre + ' ' + apellido;
}
let nombre = nombreCompleto('lara', 'chavez'); //Pide todos los parametros
console.log(nombre);

//PARAMETROS OPCIONALES
function nombre_completo( nombre:string, apellido?:string):string{
    if(apellido){ //Si hay apellido mostrar todo
        return nombre + " " + apellido;
    } else{ //Si no solo mostrar el nombre
        return nombre;
    }
}
let nombre2 = nombre_completo("Larissa");
console.log(nombre2);

//PARAMETROS POR DEFECTO
function nombreCompleto2(nombre: string, apellido:string, capitalizado:boolean = false){
    if(capitalizado){
        return capitalizar(nombre) + " " + capitalizar(apellido);
    } else{
        return nombre + " " + apellido;
    }
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre3 = nombreCompleto2('lara', 'chavez', true); 
console.log(nombre3);

//PARAMETROS REST
function nombreCompleto3( nombre:string, ...losDemasParametros:string[]):string{
    return nombre + " " + losDemasParametros.join(' ');
}

let superman = nombreCompleto3('Clark', 'Joseph', 'Kent');
console.log(superman);
