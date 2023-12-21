import { validatePost } from "./post"

describe('validatePost test', () => {
    it('should validate correct postal codes', () => {
        expect(validatePost('12345')).toBeTruthy();
    });

    it('should reject postal codes with the incorrect format', () => {
        expect(validatePost('1345')).toBeFalsy();   // Too short
        expect(validatePost('123456')).toBeFalsy(); // Too long
        expect(validatePost('ajejo')).toBeFalsy();  // Not digits
    });
});
