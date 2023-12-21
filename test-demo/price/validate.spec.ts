// roundPrice.test.ts
import { roundPrice } from './price';

describe('roundPrice tests', () => {
    it('rounds and formats price with SEK', () => {
        expect(roundPrice(298.765)).toBe('298.77 SEK');
        expect(roundPrice(45)).toBe('45.00 SEK');
        expect(roundPrice(1234.567)).toBe('1234.57 SEK');
    });

    it('applies custom format patterns for currencies', () => {
        expect(roundPrice(298.765, '%PRICE% kr')).toBe('298.77 kr');
        expect(roundPrice(45, '€%PRICE%')).toBe('€45.00');
        expect(roundPrice(1234.567, 'GBP %PRICE%')).toBe('GBP 1234.57');
    });
});
