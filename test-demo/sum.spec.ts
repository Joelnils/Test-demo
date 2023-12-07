import { sum } from './sum';

describe('sum.ts tests', () => {

    it('should return 5 when adding 2 with 3', () => {
        const actualResult = sum(2, 3);
        const expectedResult = 5;
        expect(actualResult).toBe(expectedResult);
    })

    it('should return 14 when adding 10 with 4', () => {
        const result = sum(10, 4);
        expect(result).toBe(14);
    })

})