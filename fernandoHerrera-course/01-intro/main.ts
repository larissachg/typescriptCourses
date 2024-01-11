function Saludador(saludo: string){
    this.saludo = saludo;
}

Saludador.prototype.decirHola = function() {
    return 'Hola ' + this.saludo;
}

let saludador = new Saludador("mundo");

let boton = document.createElement('button');

boton.textContent = 'Decir Hola';

boton.onclick = function(){
    alert(saludador.decirHola());
};

document.body.appendChild(boton);