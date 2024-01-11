//FUNCIONES BASICAS
var heroe = 'Flash';
function imprime_heroe() {
    return heroe;
}
var activar_batisenal = function () {
    return 'Batisenal Activada';
};
console.log(imprime_heroe());
console.log(activar_batisenal());
//PARAMETROS OBLIGATORIOS
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto('lara', 'chavez'); //Pide todos los parametros
console.log(nombre);
//PARAMETROS OPCIONALES
function nombre_completo(nombre, apellido) {
    if (apellido) { //Si hay apellido mostrar todo
        return nombre + " " + apellido;
    }
    else { //Si no solo mostrar el nombre
        return nombre;
    }
}
var nombre2 = nombre_completo("Larissa");
console.log(nombre2);
//PARAMETROS POR DEFECTO
function nombreCompleto2(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre3 = nombreCompleto2('lara', 'chavez', true);
console.log(nombre3);
//PARAMETROS REST
function nombreCompleto3(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(' ');
}
var superman = nombreCompleto3('Clark', 'Joseph', 'Kent');
console.log(superman);
