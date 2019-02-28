import Producto from '../Poliformismo/producto.js';

class Servicio extends Producto{
    constructor (nombre, precio){
        super();
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularTarifa(cant){
        return cant*this.precio;
    }

}

module.exports = Servicio;