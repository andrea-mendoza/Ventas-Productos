var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../articulo.js';

describe('Articulo test', function() {

    it('La tarifa de ningun articulo es igual a 0',function(){
        let articulo = new Articulo (0,30,250);
        expect(articulo.calcularTarifa()).equal(0);
    });

    it('La tarifa de 3 articulos es igual a 780',function(){
        let articulo = new Articulo (3,30,250);
        expect(articulo.calcularTarifa()).equal(780);
    });
});
