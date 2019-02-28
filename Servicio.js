import Producto from '../Poliformismo/producto.js';

class Servicio extends Producto{
    constructor (cantidad, precio){
        super();
        this.cantidad = cantidad;
        this.precio = precio;
    }

    calcularTarifa(){
        return this.cantidad*this.precio;
    }

}

module.exports = Servicio;