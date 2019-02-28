var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Servicio from '../servicio.js';

describe('Servicio test', function() {

    it('Si no se requiere ningun servicio la tarifa debe ser 0',function(){
        let thisService = new Servicio(0, 13);
        expect(thisService.calcularTarifa()).equal(0);
    });

    it('Si se quiere 2 servicios de valor 13, la tarifa debe ser 26',function(){
        let thisService = new Servicio(2, 13);
        expect(thisService.calcularTarifa()).equal(26);
    });


});