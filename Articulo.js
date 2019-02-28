import Producto from '../Poliformismo/producto.js';

class Articulo extends Producto{
    constructor(nombre,saldo,precio)
    {
        super();
        this.nombre = nombre;
        this.saldo = saldo;
        this.precio = precio;
    }

    calcularTarifa(cant){
        if(cant === 0)
            return 0;
        else
            return cant*this.precio+this.saldo;
    }
}

module.exports = Articulo;