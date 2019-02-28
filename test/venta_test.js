var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../venta.js';
import Articulo from '../articulo.js';
import Servicio from '../servicio.js';

describe('Tests Venta', function() {

    let venta = new Venta();

    it('Cuando la venta inicia el total de la compra debe ser 0',function(){
        expect(venta.total()).equal(0);
    });

    it('Cuando la venta tiene dos servicios el total de la compra debe ser 26',function(){
        let thisService = new Servicio(2, 13);
        venta.agregarProducto(thisService);
        expect(venta.total()).equal(26);
    });

    it('Cuando la venta tiene dos servicios y tres articulos, el total de la compra debe ser 858',function(){
        let thisService = new Servicio(2, 13);
        let thisArticle = new Articulo (3,30,250);
        venta.agregarProducto(thisArticle);
        venta.agregarProducto(thisService);
        expect(venta.total()).equal(858);
    });
});
