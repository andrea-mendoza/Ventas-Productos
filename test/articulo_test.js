var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../articulo.js';
import Producto from '../producto.js';

describe('Articulo test', function() {

    let thisArticle = new Articulo ("Modem",30,250);

    it('La tarifa de ningun articulo Modem es igual a 0',function(){
        expect(thisArticle.calcularTarifa(0)).equal(0);
    });

    it('La tarifa de 3 articulos Modem es igual a 780',function(){
        expect(thisArticle.calcularTarifa(3)).equal(780);
    });
});
