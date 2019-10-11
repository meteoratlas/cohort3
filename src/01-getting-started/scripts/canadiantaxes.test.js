import determineTaxesOwed, {taxBrackets} from './canadiantaxes';

test('Calculate the tax rate based on income', () => {
    expect(determineTaxesOwed(1, taxBrackets)).toBe(0.15);
    expect(determineTaxesOwed(2, taxBrackets)).toBe(0.3);
    expect(determineTaxesOwed(50000, taxBrackets)).toBe(7630.35);
    expect(determineTaxesOwed(100000, taxBrackets)).toBe(18141.11);
    expect(determineTaxesOwed(150000, taxBrackets)).toBe(31211.10);
    expect(determineTaxesOwed(250000, taxBrackets)).toBe(61796.26);
});