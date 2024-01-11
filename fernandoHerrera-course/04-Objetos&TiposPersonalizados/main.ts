//Objetos Basicos
let flash = {
    nombre: 'Barry',
    edad: 25,
    poderes: ['Invisible', 'Volar']
};

//Objetos con Tipos Especificos
let flash2: {
    nombre:string, edad:number, poderes:string[]
} = {
    nombre: 'Barry',
    edad: 25,
    poderes: ['Invisible', 'Volar'],
    getNombre: function(){
    }
};

flash2.getNombre();