import Producto from '../Poliformismo/producto.js';

class Articulo extends Producto{
    constructor(nombre,saldo,precio)
    {
        super();
        this.nombre = nombre;
        this.saldo = saldo;
        this.precio = precio;
    }
    estaDisponible(cantidad)
    {
        return true;
    }

    calcularTarifa(cant){
        return 0;
    }
}

module.exports = Articulo;