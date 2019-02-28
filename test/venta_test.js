var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Venta from '../venta.js';

describe('Tests Venta', function() {

    let venta = new Venta();

    it('Cuando la venta inicia el total de la compra debe ser 0',function(){
        expect(venta.total()).equal(0);
    });
});
