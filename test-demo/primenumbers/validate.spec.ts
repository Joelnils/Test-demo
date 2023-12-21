
import { prime } from "./prime"

describe('prime tests', () => {
    it('should return true for prime numbers', () => {
        expect(prime(2)).toBeTruthy();
        expect(prime(3)).toBeTruthy();
        expect(prime(5)).toBeTruthy();
        expect(prime(7)).toBeTruthy();
        expect(prime(11)).toBeTruthy();
    });

    it('should return false for other numbers', () => {
        expect(prime(4)).toBeFalsy();
        expect(prime(6)).toBeFalsy();
        expect(prime(8)).toBeFalsy();
        expect(prime(9)).toBeFalsy();
        expect(prime(10)).toBeFalsy();
        expect(prime(0)).toBeFalsy();
        expect(prime(1)).toBeFalsy();
    });
});