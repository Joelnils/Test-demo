    import { validateEmail } from './email';

    describe('validate.ts tests', () => {
        it('validating correct emails', () => {
            const validEmail1 = "user@gmail.com";
            const validEmail2 = "user@hotmail.com";
            const validEmail3 = "user@hotmail.se";
            expect(validateEmail(validEmail1)).toBeTruthy();
            expect(validateEmail(validEmail2)).toBeTruthy();
            expect(validateEmail(validEmail3)).toBeTruthy();
        });
            it('should reject an invalid email address', () => {
                expect(validateEmail('example.com')).toBeFalsy();
                expect(validateEmail('example@domain')).toBeFalsy();
                expect(validateEmail('ex!ample@domain.com')).toBeFalsy();
            });
        });
    
