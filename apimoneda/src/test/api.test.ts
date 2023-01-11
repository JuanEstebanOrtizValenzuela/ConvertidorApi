import {getApi} from '../services/api';

describe('Pruebas en api.ts', () => {

    test('getRates debe de retornar rates del covertidor de monedas', () => {
        const rates = getApi();
        expect( typeof rates ).tobe('string');
    });

});