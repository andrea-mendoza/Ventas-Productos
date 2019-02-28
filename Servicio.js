class Servicio{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    estaDisponible(cantidad){
        return true;
    }

    calcularTarifa(cant){
        return 0;
    }

}

module.exports = Servicio;