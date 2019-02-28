class Venta{
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }

    total(){
        return this.montoTotal;
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }
}

module.exports = Venta;