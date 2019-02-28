import Producto from '../Poliformismo/producto.js';

class Articulo extends Producto{
    constructor(cantidad,saldo,precio)
    {
        super();
        this.cantidad = cantidad;
        this.saldo = saldo;
        this.precio = precio;
    }

    calcularTarifa(){
        if(this.cantidad === 0)
            return 0;
        else
            return this.cantidad*this.precio+this.saldo;
    }
}

module.exports = Articulo;