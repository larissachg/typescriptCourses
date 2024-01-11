//Funciones basicas
function sumar(a:number, b:number):number{
    return a + b;
}

let contar = function(heroes:string[]):number{
    return heroes.length;
}

let superHeroes:string[] = ['Flash', 'Arrow', 'Superman'];
contar(superHeroes);

//Parametro por defecto
function llamarBatman( llamar:boolean = true ):void{
    if(llamar){
        console.log('Batisenal activada');
    }
}
llamarBatman();

//Rest
function unirHeroes( ...personas:string[] ){
    return personas.join(", ");
}

//Tipo Funcion
function noHaceNada( numero:number, texto:string, booleando:boolean, arreglo:any[]){
}

//Crear el tipo de funcion que acepte la funcion noHaceNAda
let noHaceNadaTampoco:( n:number, t:string, b:boolean, a:any[])=>void;
noHaceNadaTampoco = noHaceNada;