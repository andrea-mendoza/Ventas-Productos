import Producto from '../Poliformismo/producto.js';

class Servicio extends Producto{
    constructor (nombre, precio){
        super();
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