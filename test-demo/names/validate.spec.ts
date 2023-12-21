import { makenames } from "./names"
describe('genetive test', ()=>{
    it('adds the letter -s for names that does not end with s', ()=>{
        expect(makenames('Johan')).toBe('Johans')
        expect(makenames('Dani')).toBe('Danis')

    })
    it('does not add -s for names that already ends with s', () => {
        expect(makenames('Claes')).toBe('Claes');
        expect(makenames('Hampus')).toBe('Hampus');
    });
});