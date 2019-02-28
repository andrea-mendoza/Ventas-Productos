var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Servicio from '../servicio.js';
import Producto from '../producto.js';

describe('Servicio test', function() {

    let thisService = new Servicio("VPN", 13);

    it('Cuando el servicio este disponible devuelve true',function(){
        expect(thisService.estaDisponible(3)).equal(true);
    });

    it('La tarifa del servicio es igual a 0',function(){
        expect(thisService.calcularTarifa(0)).equal(0);
    });

});