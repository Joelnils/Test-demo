import { lowerCase } from "./lowercase";

describe('lowerCase test', () => {
    it('returns true for lowercase', () => {
        expect(lowerCase('hey')).toBeTruthy();
        expect(lowerCase('you')).toBeTruthy();
    });

    it('returns false for other inputs', () => {
        expect(lowerCase('Hey')).toBeFalsy();
        expect(lowerCase('You')).toBeFalsy();
        expect(lowerCase('')).toBeFalsy();
        expect(lowerCase('123')).toBeFalsy();
        expect(lowerCase('hello123')).toBeFalsy();
        expect(lowerCase('!@#')).toBeFalsy();
    });
});