var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Articulo from '../articulo.js';

describe('Articulo test', function() {

    let thisArticle = new Articulo ("Modem",30,250);

    it('Cuando el servicio este disponible devuelve true',function(){
        expect(thisArticle.estaDisponible(3)).equal(true);
    });

    it('La tarifa del servicio es igual a 0',function(){
        expect(thisArticle.calcularTarifa(0)).equal(0);
    });
});
