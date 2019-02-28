class Venta{
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }

    total(){
        for(let i =0;i<this.productos.length;i++){
            this.montoTotal = this.montoTotal + this.productos[i].calcularTarifa();
        }
        return this.montoTotal;
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }
}

module.exports = Venta;