var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../articulo.js';

describe('Articulo test', function() {

    let thisArticle = new Articulo ("Modem",30,250);

    it('Cuando el articulo este disponible devuelve true',function(){
        expect(thisArticle.estaDisponible(3)).equal(true);
    });

    it('La tarifa de ningun articulo Modem es igual a 0',function(){
        expect(thisArticle.calcularTarifa(0)).equal();
    });

    it('La tarifa de 3 articulos Modem es igual a 780',function(){
        expect(thisArticle.calcularTarifa(3)).equal(780);
    });
});
