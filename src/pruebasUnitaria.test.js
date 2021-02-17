import {calcularRatio} from './helpers/helper'


describe('pruebas para la funcion calcularRatio',()=>{

    test('Dividir correctamente',()=>{
        expect( calcularRatio(1080,1350) ).toBe(0.8)
    })

    test('No debe ser un string',()=>{
        expect( calcularRatio(1080,1350) ).not.toBe('')
    })

})


