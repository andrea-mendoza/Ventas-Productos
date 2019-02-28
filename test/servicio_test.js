var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Servicio from '../servicio.js';

describe('Servicio test', function() {

    let thisService = new Servicio("VPN", 13);

    it('Cuando el servicio este disponible devuelve true',function(){
        expect(thisService.estaDisponible(3)).equal(true);
    });

    it('Si no se requiere ningun servicio de VPN la tarifa debe ser 0',function(){
        expect(thisService.calcularTarifa(0)).equal(0);
    });

    it('Si se quiere 2 servicios de VPN la tarifa debe ser 26',function(){
        expect(thisService.calcularTarifa(2)).equal(26);
    });


});