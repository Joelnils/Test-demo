import { getData } from './getData';
import { response } from './responses/getDataResponse';

describe('getData tests', () => {
    
    it('should return array with 2 persons when getting data', async () => {
        const actualResult = await getData();
        const expectedResult = response;
        expect(actualResult).toStrictEqual(expectedResult);
    })

})